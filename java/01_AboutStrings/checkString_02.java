public class checkString_02 {
    // 1. คลาสสำหรับเก็บผลการวิเคราะห์ข้อความ
    public static class StringAnalysis {
        public int length;
        public boolean hasNumbers;
        public boolean hasSpecialChars;
        public boolean isUpperCase;
        public boolean isLowerCase;

        @Override
        public String toString() {
            return "StringAnalysis{" +
                   "length=" + length +
                   ", hasNumbers=" + hasNumbers +
                   ", hasSpecialChars=" + hasSpecialChars +
                   ", isUpperCase=" + isUpperCase +
                   ", isLowerCase=" + isLowerCase +
                   '}';
        }
    }

    public static StringAnalysis checkString_02(String input) {
        StringAnalysis analysis = new StringAnalysis();
        analysis.length = input.length();
        analysis.hasNumbers = input.matches(".*\\d.*");
        analysis.hasSpecialChars = input.matches(".*[^a-zA-Z0-9].*");
        analysis.isUpperCase = input.equals(input.toUpperCase());
        analysis.isLowerCase = input.equals(input.toLowerCase());
        return analysis;
    }

    public static void main(String[] args) {
        // ทดสอบการวิเคราะห์ข้อความ
        System.out.println(checkString_02("Hello123!"));
    }
}