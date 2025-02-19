import java.util.Arrays;

public class digitSum_02 {
    public static class DigitAnalysis {
        public int originalNumber;
        public int numberOfDigits;
        public int[] digits;
        public int sum;
        public int product;

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

        for (int i = 0; i < numStr.length(); i++) {
            int digit = Character.getNumericValue(numStr.charAt(i));
            analysis.digits[i] = digit;
            analysis.sum += digit;
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