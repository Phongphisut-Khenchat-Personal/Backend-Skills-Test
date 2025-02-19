import java.util.Arrays;

public class calculateRequiredIncrement_02 {
    public static class IncrementAnalysis {
        public int[] originalArray; // อาเรย์ต้นฉบับ
        public int[] finalArray; // อาเรย์หลังจากการเพิ่มค่า
        public int incrementsNeeded; // จำนวนครั้งที่ต้องเพิ่มค่า

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
            return null; // คืนค่า null ถ้าอาเรย์เป็น null หรือว่างเปล่า
        }

        IncrementAnalysis analysis = new IncrementAnalysis();
        analysis.originalArray = arr.clone(); // เก็บอาเรย์ต้นฉบับ
        analysis.finalArray = arr.clone(); // เก็บอาเรย์ที่จะถูกปรับค่า
        analysis.incrementsNeeded = 0; // เริ่มต้นจำนวนครั้งที่ต้องเพิ่มค่าเป็น 0

        // วนลูปจนกว่าค่าสูงสุดในอาเรย์จะมากกว่าหรือเท่ากับค่าเป้าหมาย
        while (Arrays.stream(analysis.finalArray).max().getAsInt() < target) {
            int minIndex = 0; // เก็บตำแหน่งของค่าที่น้อยที่สุดในอาเรย์
            for (int i = 1; i < analysis.finalArray.length; i++) {
                if (analysis.finalArray[i] < analysis.finalArray[minIndex]) {
                    minIndex = i; // อัปเดตตำแหน่งของค่าที่น้อยที่สุด
                }
            }
            analysis.finalArray[minIndex]++; // เพิ่มค่าที่ตำแหน่งที่น้อยที่สุด
            analysis.incrementsNeeded++; // เพิ่มจำนวนครั้งที่ต้องเพิ่มค่า
        }

        return analysis; // คืนค่าออบเจ็กต์ที่มีข้อมูลการวิเคราะห์
    }

    // ตัวอย่างการใช้งาน
    public static void main(String[] args) {
        // ทดสอบการคำนวณการเพิ่มค่า
        System.out.println(calculateRequiredIncrement(new int[]{1, 2, 3}, 5));
    }
}