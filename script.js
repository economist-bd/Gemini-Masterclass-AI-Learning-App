document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements নির্বাচন করা
    const chapterList = document.getElementById('chapter-list');
    const bookContent = document.getElementById('book-content');
    const landingPage = document.getElementById('landing-page');
    const readerPage = document.getElementById('reader-page');
    const sidebar = document.getElementById('sidebar');

    // ১. চ্যাপ্টার লিস্ট লোড করার ফাংশন
    function loadChapters() {
        if (!chapterList) return; // সেফটি চেক

        bookData.forEach((chapter, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="far fa-circle"></i> ${chapter.title}`;
            
            li.addEventListener('click', () => {
                loadContent(index);
                
                // মেনু হাইলাইট করা
                document.querySelectorAll('#chapter-list li').forEach(l => {
                    l.classList.remove('active');
                    l.querySelector('i').className = 'far fa-circle';
                });
                li.classList.add('active');
                li.querySelector('i').className = 'fas fa-check-circle';
                
                // মোবাইলে ক্লিক করার পর সাইডবার বন্ধ করা
                if(window.innerWidth < 768) {
                    sidebar.classList.remove('active');
                }
            });
            chapterList.appendChild(li);
        });
    }

    // ২. কন্টেন্ট লোড করার ফাংশন (ফিক্সড)
    function loadContent(index) {
        const chapter = bookData[index];
        
        // অর্ডার বাটন HTML
        const orderButton = `
            <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
                <p style="text-align: center; color: #666;">আপনি কি এরকম অ্যাপ বা ওয়েবসাইট বানাতে চান?</p>
                <a href="https://demand-supply.vercel.app/" target="_blank" class="order-btn">
                    🛒 অর্ডার করতে ক্লিক করুন
                </a>
            </div>
        `;

        // কন্টেন্ট সেট করা
        let contentHTML = `
            <div class="page-content fade-in">
                ${chapter.content}
                ${orderButton}
                
                <div style="margin-top: 20px; text-align: center;">
                    ${index < bookData.length - 1 ? 
                        `<button class="primary-btn" onclick="nextChapter(${index})">পরবর্তী অধ্যায় <i class="fas fa-arrow-right"></i></button>` : 
                        '<p>--- সমাপ্ত ---</p>'}
                </div>
            </div>
        `;

        // 

[Image of X]
 রিপ্লেস করার লজিক (Regex Fix)
        // এটি টেক্সট থেকে প্লেসহোল্ডার খুঁজে বের করে ইমেজ ট্যাগ বসাবে
        contentHTML = contentHTML.replace(/\/g, function(match, text) {
            // স্পেস থাকলে %20 দিয়ে এনকোড করা হচ্ছে যাতে লিঙ্ক না ভাঙ্গে
            const encodedText = encodeURIComponent(text.trim());
            return `<img src="https://via.placeholder.com/600x350?text=${encodedText}" alt="${text}" style="width:100%; border-radius:8px; margin:15px 0; border:1px solid #ddd;">`;
        });

        // ফাইনাল HTML বসানো
        bookContent.innerHTML = contentHTML;
        
        // স্ক্রল করে উপরে নিয়ে যাওয়া
        document.querySelector('.content-area').scrollTop = 0;
    }

    // ৩. পরবর্তী চ্যাপ্টারে যাওয়ার ফাংশন
    window.nextChapter = (currentIndex) => {
        if(currentIndex + 1 < bookData.length) {
            // লিস্টের পরবর্তী আইটেমে ক্লিক সিমুলেট করা
            const nextItem = chapterList.children[currentIndex + 1];
            if(nextItem) nextItem.click();
        }
    };

    // ৪. ইভেন্ট লিসেনার (বাটন ক্লিক হ্যান্ডলার)
    
    // "শেখা শুরু করুন" বাটন
    const startBtn = document.getElementById('start-reading-btn');
    if(startBtn) {
        startBtn.addEventListener('click', () => {
            landingPage.classList.add('hidden');
            readerPage.classList.remove('hidden');
            
            // প্রথম চ্যাপ্টার অটোমেটিক লোড করা (যদি আগে লোড না হয়ে থাকে)
            if(bookContent.innerHTML.trim() === "") {
               const firstItem = chapterList.children[0];
               if(firstItem) firstItem.click();
            }
        });
    }

    // মোবাইল মেনু টগল
    const toggleBtn = document.getElementById('toggle-sidebar');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => sidebar.classList.add('active'));
    }

    const closeBtn = document.getElementById('close-sidebar');
    if(closeBtn) {
        closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));
    }

    // অ্যাপ লোড হলে চ্যাপ্টার তৈরি করুন
    loadChapters();
});

// ৫. PWA ইন্সটল লজিক (Service Worker)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    const btn = document.getElementById('installBtn');
    if(btn) {
        btn.style.display = 'block';
        btn.addEventListener('click', () => {
            btn.style.display = 'none';
            deferredPrompt.prompt();
            deferredPrompt = null;
        });
    }
});
