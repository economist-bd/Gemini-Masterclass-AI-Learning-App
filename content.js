const bookData = [
    {
        title: "১. জেমিনি (Gemini) পরিচিতি",
        content: `
            <h2>জেমিনি: আপনার পার্সোনাল AI অ্যাসিস্ট্যান্ট</h2>
            <p><strong>জেমিনি (Gemini)</strong> হলো গুগলের তৈরি সবচেয়ে শক্তিশালী কৃত্রিম বুদ্ধিমত্তা বা AI। আগে একে 'Bard' নামে ডাকা হতো। এটি আপনার স্কুলের পড়াশোনা থেকে শুরু করে অফিসের কাজ, সব কিছুতেই সাহায্য করতে পারে।</p>
                 জেমিনি পরিচিতি
            <div class="info-box">
                <h3>কেন জেমিনি সেরা?</h3>
                <ul>
                    <li>✅ এটি মাল্টিমোডাল (লেখা, ছবি, ভিডিও সব বুঝতে পারে)।</li>
                    <li>✅ গুগলের বিশাল তথ্যের ভাণ্ডার এর সাথে যুক্ত।</li>
                    <li>✅ সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায়।</li>
                </ul>
            </div>

            <p><strong>কিভাবে শুরু করবেন?</strong><br>
            খুব সহজ! আপনার একটি জিমেইল একাউন্ট থাকলেই আপনি <a href="https://gemini.google.com" target="_blank">gemini.google.com</a> এ গিয়ে লগইন করে কাজ শুরু করতে পারেন।</p>
        `
    },
    {
        title: "২. ব্যবহারের নিয়ম, উপকারিতা ও অপকারিতা",
        content: `
            <h2>AI এর সঠিক ব্যবহার ও সতর্কতা</h2>
            
            <h3>উপকারিতা (Pros):</h3>
            <ul>
                <li><strong>শিক্ষা:</strong> কঠিন অংক বা বিজ্ঞানের বিষয় সহজে বুঝিয়ে দেয়।</li>
                <li><strong>ক্রিয়েটিভিটি:</strong> গান, কবিতা, গল্প বা ইমেইল লিখে দিতে পারে।</li>
                <li><strong>সময় সাশ্রয়:</strong> ১ ঘন্টার কাজ ৫ মিনিটে করে দেয়।</li>
            </ul>

            <h3>অপকারিতা (Cons) ও সতর্কতা:</h3>
            <div class="info-box" style="border-left-color: red; background: #fff1f2;">
                <ul>
                    <li>⚠️ <strong>হ্যালুসিনেশন:</strong> মাঝে মাঝে জেমিনি ভুল তথ্য বা বানোয়াট তথ্য দিতে পারে। তাই অন্ধভাবে বিশ্বাস করবেন না।</li>
                    <li>⚠️ <strong>নির্ভরশীলতা:</strong> সব কাজ AI দিয়ে করালে নিজের মেধা বিকাশ বাধাগ্রস্ত হতে পারে।</li>
                </ul>
            </div>
        `
    },
    {
        title: "৩. জেমিনি মডেল ও ভার্সন পরিচিতি",
        content: `
            <h2>কোন মডেলটি আপনার জন্য?</h2>
            <p>গুগল জেমিনির তিনটি প্রধান সংস্করণ রয়েছে:</p>

            <table border="1" cellpadding="10" style="width:100%; border-collapse:collapse; text-align:left;">
                <tr style="background:#e0f2fe;"><th>মডেল</th><th>বর্ণনা</th></tr>
                <tr>
                    <td><strong>Gemini Nano</strong></td>
                    <td>স্মার্টফোনের ভেতরে অফলাইনে কাজ করার জন্য তৈরি। (Pixel 8 Pro তে দেখা যায়)।</td>
                </tr>
                <tr>
                    <td><strong>Gemini Flash</strong></td>
                    <td>সবচেয়ে দ্রুত গতির মডেল। সাধারণ কাজের জন্য সেরা এবং ফ্রি।</td>
                </tr>
                <tr>
                    <td><strong>Gemini Pro</strong></td>
                    <td>জটিল লজিক এবং রিজনিং এর জন্য। এটিও এখন ফ্রিতে ব্যবহার করা যায়।</td>
                </tr>
                <tr>
                    <td><strong>Gemini Ultra</strong></td>
                    <td>সবচেয়ে শক্তিশালী। এটি ব্যবহার করতে 'Gemini Advanced' সাবস্ক্রিপশন লাগে।</td>
                </tr>
            </table>
        `
    },
    {
        title: "৪. প্ল্যান, খরচ ও সাবস্ক্রিপশন",
        content: `
            <h2>টাকা লাগবে নাকি ফ্রি?</h2>
            
            <h3>১. ফ্রি প্ল্যান (Free Forever)</h3>
            <ul>
                <li>Gemini Pro মডেল।</li>
                <li>আনলিমিটেড চ্যাট।</li>
                <li>ছবি তৈরি করার সুবিধা।</li>
                <li>ছাত্রছাত্রীদের জন্য এটিই যথেষ্ট।</li>
            </ul>

            <h3>২. জেমিনি অ্যাডভান্সড (Paid)</h3>
            <ul>
                <li><strong>খরচ:</strong> মাসে প্রায় ২০০০-২৫০০ টাকা (Google One সাবস্ক্রিপশন)।</li>
                <li>সুবিধা: 2TB স্টোরেজ, জিমেইল/ডকস এ AI সুবিধা এবং Gemini Ultra মডেল।</li>
            </ul>
        `
    },
    {
        title: "৫. ভিডিও তৈরির গাইডলাইন",
        content: `
            <h2>AI দিয়ে ভিডিও তৈরির ব্লু-প্রিন্ট</h2>
            <p>জেমিনি সরাসরি ভিডিও এডিট করে না, কিন্তু ভিডিও তৈরির সব রসদ যোগান দেয়।</p>
            
            <h3>ধাপ ১: স্ক্রিপ্ট রাইটিং</h3>
            <p>জেমিনিকে বলুন: <em>"বাংলাদেশের পর্যটন নিয়ে ৫ মিনিটের একটি ইউটিউব ভিডিওর স্ক্রিপ্ট লিখে দাও।"</em></p>
            
            <h3>ধাপ ২: সিন ডিটেইলস</h3>
            <p>প্রতিটি সিনে কি দৃশ্য থাকবে, ক্যামেরা এঙ্গেল কেমন হবে তা জেমিনিকে জিজ্ঞেস করুন।</p>
            
            <h3>ধাপ ৩: ভিডিও জেনারেশন</h3>
            <p>জেমিনির স্ক্রিপ্ট এবং প্রম্পট নিয়ে <strong>Sora, RunwayML, বা HeyGen</strong> এর মতো টুলে দিয়ে ভিডিও তৈরি করুন।</p>
        `
    },
    {
        title: "৬. ২৫টি ভিডিও তৈরির প্রম্পট (Ideas)",
        content: `
            <h2>ইউটিউব বা রিলস এর জন্য ২৫টি আইডিয়া</h2>
            <div class="prompt-grid">
                <div class="prompt-card"><strong>১. ট্রাভেল ভ্লগ:</strong> "Write a cinematic intro script for a Cox's Bazar vlog emphasizing the sunset."</div>
                <div class="prompt-card"><strong>২. টেক টিউটোরিয়াল:</strong> "Explain how VPN works for a 1-minute Tech Reels script."</div>
                <div class="prompt-card"><strong>৩. মোটিভেশনাল:</strong> "Write a powerful speech about 'Failure is the pillar of success' for a short video."</div>
                <div class="prompt-card"><strong>৪. রান্নার শো:</strong> "Funny script for making 'Dim Bhaji' (Omelet) like a masterchef."</div>
                <div class="prompt-card"><strong>৫. হরর স্টোরি:</strong> "A short spooky story script about a haunted old banyan tree in a village."</div>
                <div class="prompt-card"><strong>৬. প্রোডাক্ট রিভিউ:</strong> "Script for reviewing a smartwatch highlighting battery life."</div>
                <div class="prompt-card"><strong>৭. ফ্যাক্ট ভিডিও:</strong> "5 mind-blowing facts about space - script for Shorts."</div>
                <div class="prompt-card"><strong>৮. শিক্ষামূলক:</strong> "Explain Photosynthesis to kids using simple animation instructions."</div>
                <div class="prompt-card"><strong>৯. কমেডি স্কিট:</strong> "Dialogue between a shopkeeper and a confused customer."</div>
                <div class="prompt-card"><strong>১০. বুক রিভিউ:</strong> "Summary script of 'Pother Panchali' in 3 minutes."</div>
                <div class="prompt-card">... (বাকি প্রম্পট অ্যাপে দেখুন)</div>
            </div>
        `
    },
    {
        title: "৭. ছবি তৈরির গাইড (Imagen 3)",
        content: `
            <h2>কথার জাদুতে ছবি আঁকা</h2>
            <p>জেমিনি এখন <strong>Imagen 3</strong> মডেল ব্যবহার করে হাই-কোয়ালিটি ছবি তৈরি করতে পারে।</p>
            
            
            <h3>কিভাবে প্রম্পট লিখবেন?</h3>
            <p>ভালো ছবির জন্য ৪টি বিষয় উল্লেখ করুন:</p>
            <ol>
                <li><strong>Subject:</strong> ছবিতে কি থাকবে? (E.g., A cat)</li>
                <li><strong>Action:</strong> কি করছে? (Reading a book)</li>
                <li><strong>Environment:</strong> কোথায়? (In a cozy library)</li>
                <li><strong>Style:</strong> কেমন দেখতে? (Cyberpunk, Watercolor, 3D Render)</li>
            </ol>
        `
    },
    {
        title: "৮. ২৫টি ছবি তৈরির প্রম্পট (Art Styles)",
        content: `
            <h2>কপি-পেস্ট করে ছবি বানান</h2>
            <div class="prompt-grid">
                <div class="prompt-card">
                    <strong>১. Cyberpunk BD:</strong><br>
                    <span class="prompt-box">"Futuristic Dhaka city at night, neon lights, rickshaws flying, cyberpunk style, hyper-realistic, 8k."</span>
                </div>
                <div class="prompt-card">
                    <strong>২. Village Watercolor:</strong><br>
                    <span class="prompt-box">"A beautiful Bangladeshi village morning, farmers going to field, watercolor painting style, soft colors."</span>
                </div>
                <div class="prompt-card">
                    <strong>৩. 3D Character:</strong><br>
                    <span class="prompt-box">"Cute 3D Pixar style character of a Bangladeshi student holding a backpack, vibrant colors."</span>
                </div>
                <div class="prompt-card">
                    <strong>৪. Macro Nature:</strong><br>
                    <span class="prompt-box">"Extreme close up of a dew drop on a lotus leaf, morning sunlight, bokeh background, macro photography."</span>
                </div>
                <div class="prompt-card">
                    <strong>৫. Historical:</strong><br>
                    <span class="prompt-box">"Ancient Lalbagh Fort during Mughal era, soldiers guarding, cinematic lighting, photorealistic."</span>
                </div>
                 <div class="prompt-card">
                    <strong>৬. Pencil Sketch:</strong><br>
                    <span class="prompt-box">"Portrait of an old fisherman, detailed charcoal sketch, rough texture."</span>
                </div>
                </div>
        `
    },
    {
        title: "৯. ক্যামেরা ও ভিসুয়্যাল স্টাইল গাইড",
        content: `
            <h2>প্রম্পটে ব্যবহার করার মতো প্রো টার্মস</h2>
            <p>ছবি বা ভিডিও প্রম্পটে এই শব্দগুলো ব্যবহার করলে রেজাল্ট অনেক ভালো আসবে:</p>
            
            <h3>Camera Angles:</h3>
            <ul>
                <li><strong>Wide Angle:</strong> অনেক বড় এলাকা দেখানোর জন্য।</li>
                <li><strong>Drone Shot:</strong> উপর থেকে নিচের দৃশ্য (Bird's eye view)।</li>
                <li><strong>Close-up:</strong> মুখের বা বস্তুর খুব কাছের দৃশ্য।</li>
            </ul>

            <h3>Lighting Modes:</h3>
            <ul>
                <li><strong>Golden Hour:</strong> সূর্যোদয় বা সূর্যাস্তের নরম আলো।</li>
                <li><strong>Cinematic Lighting:</strong> সিনেমার মতো ড্রামাটিক আলো।</li>
                <li><strong>Neon Lighting:</strong> রঙিন আলো (নাইট মোডের জন্য)।</li>
            </ul>

            <h3>Styles:</h3>
            <p>Bokeh (ঝাপসা ব্যাকগ্রাউন্ড), Minimalist (খুব সাধারণ), Surreal (কাল্পনিক)।</p>
        `
    },
    {
        title: "১০. ছাত্রছাত্রীদের জন্য জেমিনি হ্যাকস",
        content: `
            <h2>স্টুডেন্ট স্পেশাল টিপস</h2>
            
            <div class="info-box">
                <h3>১. নোট তৈরি করা</h3>
                <p>যেকোনো বিশাল আর্টিকেল পেস্ট করে বলুন: <em>"Make bullet point notes from this text."</em></p>
            </div>
            
            <div class="info-box">
                <h3>২. ইমেইল লেখা</h3>
                <p><em>"Write an email to my principal asking for 2 days leave due to fever."</em></p>
            </div>
            
            <div class="info-box">
                <h3>৩. ক্যারিয়ার গাইডলাইন</h3>
                <p><em>"I love drawing and math. What career is best for me?"</em></p>
            </div>
        `
    },
    {
        title: "১১. ফ্রিল্যান্সিং ও আয়",
        content: `
            <h2>জেমিনি শিখে আয়ের উপায়</h2>
            <ul>
                <li><strong>কন্টেন্ট রাইটিং:</strong> ব্লগ পোস্ট বা আর্টিকেল লিখে।</li>
                <li><strong>কপিরাইটিং:</strong> বিজ্ঞাপনের জন্য আকর্ষণীয় লেখা লিখে।</li>
                <li><strong>AI Art Sell:</strong> জেমিনি দিয়ে ছবি বানিয়ে স্টক সাইটে বিক্রি।</li>
                <li><strong>প্রম্পট ইঞ্জিনিয়ারিং:</strong> অন্যদের জন্য সঠিক প্রম্পট তৈরি করে দেওয়া।</li>
            </ul>
        `
    },
    {
        title: "১২. লেখক পরিচিতি ও অর্ডার",
        content: `
            <h2>ধন্যবাদান্তে</h2>
            <div style="text-align:center;">
                
                <h3>মঞ্জুরুল হক</h3>
                <p>প্রভাষক, অর্থনীতি</p>
                <hr>
                <p><i class="fas fa-phone"></i> মোবাইল: ০১৭১৫২৪৭৫৮৮</p>
                <p><i class="fab fa-whatsapp"></i> WhatsApp: 01715247588</p>
                <p><i class="fas fa-envelope"></i> মেইল: monjurul.jusc@gmail.com</p>
                <p><i class="fab fa-facebook"></i> <a href="https://www.facebook.com/himel.hemu" target="_blank">Himel Hemu</a></p>
            </div>
            <br>
            <p style="text-align:center; font-weight:bold;">এই অ্যাপটি বা এরকম প্রজেক্ট অর্ডার করতে নিচের বাটনে ক্লিক করুন।</p>
        `
    }
];
