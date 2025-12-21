document.addEventListener('DOMContentLoaded', () => {
    const chapterList = document.getElementById('chapter-list');
    const bookContent = document.getElementById('book-content');
    const landingPage = document.getElementById('landing-page');
    const readerPage = document.getElementById('reader-page');
    const sidebar = document.getElementById('sidebar');

    // 1. Load Chapters
    function loadChapters() {
        bookData.forEach((chapter, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="far fa-circle"></i> ${chapter.title}`;
            li.addEventListener('click', () => {
                loadContent(index);
                // Active state styling
                document.querySelectorAll('#chapter-list li').forEach(l => {
                    l.classList.remove('active');
                    l.querySelector('i').className = 'far fa-circle';
                });
                li.classList.add('active');
                li.querySelector('i').className = 'fas fa-check-circle';
                
                // Close sidebar on mobile
                if(window.innerWidth < 768) sidebar.classList.remove('active');
            });
            chapterList.appendChild(li);
        });
    }

    // 2. Load Content with CTA Button Injection
    function loadContent(index) {
        const chapter = bookData[index];
        
        // Dynamic CTA Button HTML
        const orderButton = `
            <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
                <p style="text-align: center; color: #666;">আপনি কি এরকম অ্যাপ বা ওয়েবসাইট বানাতে চান?</p>
                <a href="https://demand-supply.vercel.app/" target="_blank" class="order-btn">
                    🛒 অর্ডার করতে ক্লিক করুন
                </a>
            </div>
        `;

        bookContent.innerHTML = `
            <div class="page-content fade-in">
                ${chapter.content}
                ${orderButton} <div style="margin-top: 20px; text-align: center;">
                    ${index < bookData.length - 1 ? 
                        `<button class="primary-btn" onclick="nextChapter(${index})">পরবর্তী অধ্যায় <i class="fas fa-arrow-right"></i></button>` : 
                        '<p>--- সমাপ্ত ---</p>'}
                </div>
            </div>
        `;
        document.querySelector('.content-area').scrollTop = 0;
        
        // Image Placeholder Replacement (Demo)
        const images = bookContent.querySelectorAll('img');
        images.forEach(img => {
            img.onerror = function() {
                this.src = 'https://via.placeholder.com/600x400?text=Gemini+Demo+Image';
            };
        });
        
        // Replace Image Tags like 

[Image of X]
 with placeholders
        bookContent.innerHTML = bookContent.innerHTML.replace(/\/g, 
            '<img src="https://via.placeholder.com/600x350?text=$1" alt="$1" style="width:100%; border-radius:8px; margin:10px 0;">');
    }

    // 3. Navigation Helpers
    window.nextChapter = (currentIndex) => {
        if(currentIndex + 1 < bookData.length) {
            chapterList.children[currentIndex + 1].click();
        }
    };

    // 4. Event Listeners
    document.getElementById('start-reading-btn').addEventListener('click', () => {
        landingPage.classList.add('hidden');
        readerPage.classList.remove('hidden');
    });
    
    document.getElementById('toggle-sidebar').addEventListener('click', () => sidebar.classList.add('active'));
    document.getElementById('close-sidebar').addEventListener('click', () => sidebar.classList.remove('active'));

    // Initialize
    loadChapters();
});

// PWA Install Logic
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('installBtn');
    btn.style.display = 'block';
    
    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt = null;
    });
});
