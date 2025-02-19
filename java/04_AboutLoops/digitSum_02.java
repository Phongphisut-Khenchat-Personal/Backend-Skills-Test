import java.util.Arrays;

public class digitSum_02 {
    public static class DigitAnalysis {
        public int originalNumber; // ตัวเลขต้นฉบับ
        public int numberOfDigits; // จำนวนหลักของตัวเลข
        public int[] digits; // อาร์เรย์ของตัวเลขแต่ละหลัก
        public int sum; // ผลรวมของตัวเลขแต่ละหลัก
        public int product; // ผลคูณของตัวเลขแต่ละหลัก

        @Override
        public String toString() {
            return "DigitAnalysis{" +
                   "originalNumber=" + originalNumber +
                   ", numberOfDigits=" + numberOfDigits +
                   ", digits=" + Arrays.toString(digits) +
                   ", sum=" + sum +
                   ", product=" + product +
                   '}';
        }
    }

    // 4. ฟังก์ชันวิเคราะห์ตัวเลข
    public static DigitAnalysis digitSum(int number) {
        DigitAnalysis analysis = new DigitAnalysis();
        analysis.originalNumber = number;
        
        // แปลงเป็นค่าบวกและเป็น String
        String numStr = String.valueOf(Math.abs(number));
        analysis.numberOfDigits = numStr.length();
        analysis.digits = new int[analysis.numberOfDigits];
        analysis.sum = 0;
        analysis.product = 1;

        // วนลูปผ่านแต่ละตัวอักษรในสตริงที่แปลงจากตัวเลข
        for (int i = 0; i < numStr.length(); i++) {
            // แปลงตัวอักษรเป็นตัวเลข
            int digit = Character.getNumericValue(numStr.charAt(i));
            analysis.digits[i] = digit;
            // บวกตัวเลขเข้ากับผลรวม
            analysis.sum += digit;
            // คูณตัวเลขเข้ากับผลคูณ
            analysis.product *= digit;
        }

        return analysis;
    }

    // ตัวอย่างการใช้งาน
    public static void main(String[] args) {
        // ทดสอบการวิเคราะห์ตัวเลข
        System.out.println(digitSum(12345));
    }
}