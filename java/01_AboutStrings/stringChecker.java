// โจทย์:ตรวจสอบข้อความ
// เขียนฟังก์ชัน isValidMessage(message) เพื่อตรวจสอบว่าข้อความที่ได้รับมีเงื่อนไขดังนี้หรือไม่

// ต้องมีความยาวตั้งแต่ 5 ถึง 20 ตัวอักษร
// ต้องมีตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก และตัวเลขอย่างน้อยอย่างละหนึ่งตัว
// ห้ามมีอักขระพิเศษ (ยกเว้น _ และ -)


public class stringChecker {
    public static boolean isValidMessage(String message) {
        if (message.length() < 5 || message.length() > 20) return false;
        if (!message.matches(".*[A-Z].*") || !message.matches(".*[a-z].*") || !message.matches(".*[0-9].*")) return false;
        if (!message.matches("[A-Za-z0-9_-]+")) return false;
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isValidMessage("Hello123")); // true
        System.out.println(isValidMessage("hello")); // false (ไม่มีตัวเลข)
        System.out.println(isValidMessage("HELLO1")); // false (ไม่มีตัวพิมพ์เล็ก)
        System.out.println(isValidMessage("Hello!@#")); // false (มีอักขระพิเศษ)
    }
}
