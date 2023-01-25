var notificationUnRead1 = document.getElementById("notification-unread");

var notificationUnRead2 = document.getElementById("notification-unread-2");

var notificationUnRead3 = document.getElementById("notification-unread-3");

var counter = document.querySelector("#counter-unread");

function markAsRead() {
  notificationUnRead1.style.backgroundColor = "#fff";
  notificationUnRead2.style.backgroundColor = "#fff";
  notificationUnRead3.style.backgroundColor = "#fff";

  counter.innerHTML = "0";
}
