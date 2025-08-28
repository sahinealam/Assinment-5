

## ১. `getElementById`, `getElementsByClassName`, `querySelector`, ও `querySelectorAll` এর পার্থক্য

- `getElementById('id')`: শুধু  ID পাওয়া এলিমেন্ট দেয়।
- `getElementsByClassName('class')`: ঐ ক্লাসের সব এলিমেন্ট দেয় (HTMLCollection আকারে)।
- `querySelector('selector')`: CSS সিলেক্টরের মতো প্রথম মিল পাওয়া এলিমেন্ট দেয়।
- `querySelectorAll('selector')`: সব মিল পাওয়া এলিমেন্ট দেয় (NodeList আকারে)।

---

## ২. কিভাবে নতুন DOM এলিমেন্ট তৈরি ও যোগ করা যায়?

```js
const div = document.createElement('div');
div.textContent = 'Hello!';
document.body.appendChild(div);

৩. Event Bubbling কী?

যখন ভেতরের কোন এলিমেন্টে ইভেন্ট হয়, তখন সেটা বাইরের দিকেও (parent-এ) ছড়ায়। একে বলে bubbling।

৪. Event Delegation কী? কেন দরকার?

এক parent এলিমেন্টে ইভেন্ট বসিয়ে, তার ভেতরের সব child-এর ইভেন্ট ধরা যায়। এতে কোড কম লাগে এবং নতুন এলিমেন্টেও কাজ করে।

parent.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    console.log('Button clicked!');
  }
});

৫. preventDefault() বনাম stopPropagation()
ফাংশন	কাজ
preventDefault()	ব্রাউজারের ডিফল্ট কাজ বন্ধ করে (যেমন: লিংক ক্লিক হলে পেজ লোড না হওয়া)।
stopPropagation()	ইভেন্ট আর parent-এ না যাক সেটা আটকায়।
