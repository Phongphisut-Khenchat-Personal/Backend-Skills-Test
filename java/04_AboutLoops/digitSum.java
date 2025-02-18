// โจทย์:คำนวณผลรวมของตัวเลขในแต่ละหลักโดยใช้ loop
// ให้ฟังก์ชัน sumDigits(n) คำนวณผลรวมของตัวเลขในแต่ละหลักของ n โดยใช้ while loop
// โดยเช่น sumDigits(1234) จะได้ผลลัพธ์เป็น 10 (1+2+3+4)


public class digitSum { 
    public static int sumDigits(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(sumDigits(1234)); // 10 (1+2+3+4)
        System.out.println(sumDigits(9876)); // 30 (9+8+7+6)
        System.out.println(sumDigits(102));  // 3 (1+0+2)
    }
}
