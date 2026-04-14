/**
 * 翔運工藝陶瓷有限公司 - 主要 JavaScript 功能
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // 導航欄功能
    // =========================================
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 手機版漢堡選單切換
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // 點擊選單外關閉選單
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
    
    // 點擊導航連結自動關閉選單
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // 導航欄滾動效果
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(139, 69, 19, 0.3)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(139, 69, 19, 0.2)';
        }
        
        lastScroll = currentScroll;
    });
    
    // =========================================
    // 平滑滾動
    // =========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // =========================================
    // 滾動監聽 - 激活當前頁面連結
    // =========================================
    
    const sections = document.querySelectorAll('section');
    
    function updateActiveNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // =========================================
    // 淡入動畫效果
    // =========================================
    
    const fadeElements = document.querySelectorAll('.product-card, .about-info, .contact-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // =========================================
    // 聯絡表單處理
    // =========================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                subject: this.querySelector('input[type="text"][placeholder="主題"]').value,
                message: this.querySelector('textarea').value
            };
            
            // 這裡可以整合到 Telegram Bot API
            console.log('表單資料:', formData);
            
            // 顯示成功訊息
            alert('感謝您的聯絡我們！我們將會儘快回覆您。');
            this.reset();
        });
    }
    
    // =========================================
    // 圖片預載入（當有真實圖片時）
    // =========================================
    
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.dataset.src) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.removeAttribute('data-src');
                }
                imageObserver.unobserve(entry.target);
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
    
    // =========================================
    // 統計數字動畫
    // =========================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                const suffix = finalValue.match(/[^\d]+/)?.[0] || '';
                
                let currentValue = 0;
                const increment = numericValue / 50;
                const duration = 2000;
                const stepTime = duration / 50;
                
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        target.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(currentValue) + suffix;
                    }
                }, stepTime);
                
                observer.unobserve(target);
            }
        });
    };
    
    const statsObserver = new IntersectionObserver(animateStats, {
        threshold: 0.5
    });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));
    
    // =========================================
    // 產品卡片懸停效果增強
    // =========================================
    
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // =========================================
    // 視窗大小變更響應
    // =========================================
    
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // 重設某些樣式或重新計算位置
            updateActiveNavLink();
        }, 250);
    });
    
    // =========================================
    // 初始化狀態
    // =========================================
    
    console.log('翔運工藝陶瓷網站已加載完成 ✓');
    
});

// =============================================
// Telegram 表單提交函數（可選功能）
// =============================================

async function submitToTelegram(formData) {
    const BOT_TOKEN = '8690552781:AAH3q8BoeDbxoRUNq444mJ0T5ILMlNq-nlE';
    const CHANNEL_ID = '-8192780046';
    
    const message = `
📨 新聯絡請求

👤 姓名：${formData.name}
📧 Email: ${formData.email}
📝 主題：${formData.subject || '無'}

💬 留言：
${formData.message}
    `.trim();
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHANNEL_ID,
                text: message
            })
        });
        
        return await response.json();
    } catch (error) {
        console.error('發送失敗:', error);
        return null;
    }
}
