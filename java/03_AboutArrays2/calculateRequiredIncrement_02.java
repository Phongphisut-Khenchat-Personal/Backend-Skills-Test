import java.util.Arrays;

public class calculateRequiredIncrement_02 {
    public static class IncrementAnalysis {
        public int[] originalArray;
        public int[] finalArray;
        public int incrementsNeeded;

        @Override
        public String toString() {
            return "IncrementAnalysis{" +
                   "originalArray=" + Arrays.toString(originalArray) +
                   ", finalArray=" + Arrays.toString(finalArray) +
                   ", incrementsNeeded=" + incrementsNeeded +
                   '}';
        }
    }

    // 3. ฟังก์ชันคำนวณการเพิ่มค่า
    public static IncrementAnalysis calculateRequiredIncrement(int[] arr, int target) {
        if (arr == null || arr.length == 0) {
            return null;
        }

        IncrementAnalysis analysis = new IncrementAnalysis();
        analysis.originalArray = arr.clone();
        analysis.finalArray = arr.clone();
        analysis.incrementsNeeded = 0;

        while (Arrays.stream(analysis.finalArray).max().getAsInt() < target) {
            int minIndex = 0;
            for (int i = 1; i < analysis.finalArray.length; i++) {
                if (analysis.finalArray[i] < analysis.finalArray[minIndex]) {
                    minIndex = i;
                }
            }
            analysis.finalArray[minIndex]++;
            analysis.incrementsNeeded++;
        }

        return analysis;
    }

    // ตัวอย่างการใช้งาน
    public static void main(String[] args) {
        // ทดสอบการคำนวณการเพิ่มค่า
        System.out.println(calculateRequiredIncrement(new int[]{1, 2, 3}, 5));
    }
}