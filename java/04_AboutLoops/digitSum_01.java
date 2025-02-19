// โจทย์:คำนวณผลรวมของตัวเลขในแต่ละหลักโดยใช้ loop
// ให้ฟังก์ชัน sumDigits(n) คำนวณผลรวมของตัวเลขในแต่ละหลักของ n โดยใช้ while loop
// โดยเช่น sumDigits(1234) จะได้ผลลัพธ์เป็น 10 (1+2+3+4)

public class digitSum_01 { 
    // ฟังก์ชันคำนวณผลรวมของตัวเลขในแต่ละหลัก
    public static int sumDigits(int n) {
        int sum = 0; // ตัวแปรสำหรับเก็บผลรวมของตัวเลขในแต่ละหลัก
        while (n > 0) { // วนลูปจนกว่า n จะเป็น 0
            sum += n % 10; // เพิ่มตัวเลขหลักสุดท้ายของ n เข้ากับผลรวม
            n /= 10; // ตัดตัวเลขหลักสุดท้ายออกจาก n
        }
        return sum; // คืนค่าผลรวมของตัวเลขในแต่ละหลัก
    }

    public static void main(String[] args) {
        // ทดสอบฟังก์ชันด้วยตัวเลขต่างๆ
        System.out.println(sumDigits(1234)); // 10 (1+2+3+4)
        System.out.println(sumDigits(9876)); // 30 (9+8+7+6)
        System.out.println(sumDigits(102));  // 3 (1+0+2)
    }
}