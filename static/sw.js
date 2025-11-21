// ---------------- EchoVerse Service Worker ----------------

// Ensure the SW can show notifications even if page isn't focused
self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  self.clients.claim();
});

self.addEventListener("notificationclick", (event) => {
  const action = event.action;
  const data = event.notification && event.notification.data || {};
  const id = data.id;
  event.notification.close();

  // Open or focus a client
  event.waitUntil((async () => {
    const allClients = await clients.matchAll({ type: "window", includeUncontrolled: true });
    if (allClients && allClients.length) {
      allClients[0].focus();
    } else {
      clients.openWindow("/");
    }

    if (!id) return;

    // Snooze or Done actions
    let body = { id };
    if (action === "snooze-5") body.snooze_minutes = 5;

    try{
      // same-origin fetch to Flask
      await fetch("/reminders-ack", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(body)
      });
    }catch(e){
      // ignore
    }
  })());
});
