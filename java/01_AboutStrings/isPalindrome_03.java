public class isPalindrome_03 {
    // ฟังก์ชันสำหรับตรวจสอบว่าข้อความเป็นพาลินโดรมหรือไม่
    public static boolean isPalindrome(String str) {
        // แปลงข้อความเป็นตัวพิมพ์เล็กและลบอักขระที่ไม่ใช่ตัวอักษรหรือตัวเลขทั้งหมด
        String cleaned = str.toLowerCase().replaceAll("[^a-z0-9]", "");
        // สร้างข้อความที่กลับด้านจากข้อความที่ทำความสะอาดแล้ว
        StringBuilder reversed = new StringBuilder(cleaned).reverse();
        // ตรวจสอบว่าข้อความที่ทำความสะอาดแล้วเท่ากับข้อความที่กลับด้านหรือไม่
        return cleaned.equals(reversed.toString());
    }
    
    public static void main(String[] args) {
        // ตัวอย่างการใช้งาน
        System.out.println(isPalindrome("madam")); // true
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // true
        System.out.println(isPalindrome("Hello")); // false
    }
}