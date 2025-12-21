document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const chapterList = document.getElementById('chapter-list');
    const bookContent = document.getElementById('book-content');
    const landingPage = document.getElementById('landing-page');
    const readerPage = document.getElementById('reader-page');
    const sidebar = document.getElementById('sidebar');

    // --- ১. ইভেন্ট লিসেনার (বাটনগুলো যাতে আগে লোড হয়) ---
    
    // "শেখা শুরু করুন" বাটন
    const startBtn = document.getElementById('start-reading-btn');
    if(startBtn) {
        startBtn.addEventListener('click', () => {
            landingPage.classList.add('hidden');
            readerPage.classList.remove('hidden');
            
            // যদি কন্টেন্ট খালি থাকে, প্রথম চ্যাপ্টার লোড করো
            if(!bookContent.innerHTML || bookContent.innerHTML.trim() === "") {
               if(chapterList && chapterList.children[0]) {
                   chapterList.children[0].click();
               }
            }
        });
    }

    // মোবাইল মেনু টগল বাটন
    const toggleBtn = document.getElementById('toggle-sidebar');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => sidebar.classList.add('active'));
    }

    // সাইডবার বন্ধ করার বাটন
    const closeBtn = document.getElementById('close-sidebar');
    if(closeBtn) {
        closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));
    }

    // --- ২. লজিক ফাংশন ---

    function loadChapters() {
        if (!chapterList) return; 

        bookData.forEach((chapter, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="far fa-circle"></i> ${chapter.title}`;
            
            li.addEventListener('click', () => {
                loadContent(index);
                
                // Active Class সেট করা
                const allItems = document.querySelectorAll('#chapter-list li');
                for(let item of allItems) {
                    item.classList.remove('active');
                    const icon = item.querySelector('i');
                    if(icon) icon.className = 'far fa-circle';
                }
                
                li.classList.add('active');
                const activeIcon = li.querySelector('i');
                if(activeIcon) activeIcon.className = 'fas fa-check-circle';
                
                // মোবাইল সাইডবার বন্ধ করা
                if(window.innerWidth < 768) {
                    sidebar.classList.remove('active');
                }
            });
            chapterList.appendChild(li);
        });
    }

    function loadContent(index) {
        const chapter = bookData[index];
        
        // অর্ডার বাটন
        const orderButton = `
            <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
                <p style="text-align: center; color: #666;">আপনি কি এরকম অ্যাপ বা ওয়েবসাইট বানাতে চান?</p>
                <a href="https://demand-supply.vercel.app/" target="_blank" class="order-btn">
                    🛒 অর্ডার করতে ক্লিক করুন
                </a>
            </div>
        `;

        let rawContent = `
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

        // --- ERROR FIX: Image Replacement (Safe Mode) ---
        try {
            // আমরা এখানে Regex Literal এর বদলে String Constructor ব্যবহার করছি যাতে কপি-পেস্টে সমস্যা না হয়
            const regex = new RegExp("\\", "g");
            
            rawContent = rawContent.replace(regex, function(match, text) {
                const cleanText = text.trim();
                return `<img src="https://via.placeholder.com/600x350?text=${encodeURIComponent(cleanText)}" alt="${cleanText}" style="width:100%; border-radius:8px; margin:15px 0;">`;
            });
        } catch (error) {
            console.error("Image replacement failed:", error);
            // ইমেজ রিপ্লেসমেন্ট ফেইল করলেও টেক্সট দেখাবে
        }

        bookContent.innerHTML = rawContent;
        document.querySelector('.content-area').scrollTop = 0;
    }

    // গ্লোবাল ফাংশন (নেক্সট বাটনের জন্য)
    window.nextChapter = (currentIndex) => {
        if(currentIndex + 1 < bookData.length) {
            const nextItem = chapterList.children[currentIndex + 1];
            if(nextItem) nextItem.click();
        }
    };

    // অ্যাপ চালু করা
    loadChapters();
});

// PWA Install Logic
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('installBtn');
    if(btn) {
        btn.style.display = 'block';
        btn.addEventListener('click', () => {
            btn.style.display = 'none';
            if(deferredPrompt) deferredPrompt.prompt();
            deferredPrompt = null;
        });
    }
});
