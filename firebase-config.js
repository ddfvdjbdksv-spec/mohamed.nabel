// ============================================================
//  firebase-config.js
//  إعدادات Firebase — المهندس في الرياضيات
//
//  القاعدة النشطة: mohamed-nibil
//    (مزامنة الأجهزة + كل بيانات البرنامج)
//
//  ملاحظة مهمة:
//    - هذا الملف لا يُهيئ Firebase مباشرةً (لأن SDKs تُحمَّل async)
//    - التهيئة الفعلية تتم داخل ensureDeviceSyncFirebaseInitialized()
//      في app.js عند أول استخدام فعلي للشبكة
//    - window.FIREBASE_MAIN_CONFIG: يُخزَّن هنا للرجوع إليه إذا لزم
// ============================================================

window.FIREBASE_MAIN_CONFIG = {
    apiKey: "AIzaSyDxFK6MBRsResqK0Nj-2C9gD-q50bmnumE",
    authDomain: "mohamed-nibil.firebaseapp.com",
    projectId: "mohamed-nibil",
    storageBucket: "mohamed-nibil.firebasestorage.app",
    messagingSenderId: "639224528938",
    appId: "1:639224528938:web:01abd0c6d937f37c5d8353",
    measurementId: "G-VDJCV0BST4"
};

// قاعدة المنصة التعليمية — معطّلة (الإعدادات فارغة عمداً)
window.FIREBASE_PLATFORM_CONFIG = null;

console.info('[firebase-config.js] ✅ إعدادات Firebase محمّلة — القاعدة النشطة: mohamed-nibil');
