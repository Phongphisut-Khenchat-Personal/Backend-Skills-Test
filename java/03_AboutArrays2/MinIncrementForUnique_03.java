import java.util.Arrays;

public class MinIncrementForUnique_03 {
    // ฟังก์ชันสำหรับหาจำนวนครั้งที่ต้องเพิ่มค่าในอาเรย์เพื่อให้ทุกค่ามีความเป็นเอกลักษณ์
    public static int minIncrementForUnique(int[] arr) {
        // เรียงลำดับอาเรย์จากน้อยไปมาก
        Arrays.sort(arr);
        int increments = 0;
        
        // วนลูปผ่านอาเรย์เริ่มจากตำแหน่งที่ 1
        for (int i = 1; i < arr.length; i++) {
            // ถ้าค่าปัจจุบันน้อยกว่าหรือเท่ากับค่าก่อนหน้า
            if (arr[i] <= arr[i - 1]) {
                // คำนวณค่าที่ต้องเพิ่มเพื่อให้ค่าปัจจุบันมากกว่าค่าก่อนหน้า
                int needed = arr[i - 1] + 1 - arr[i];
                // เพิ่มค่าที่ต้องเพิ่มไปยังตัวแปร increments
                increments += needed;
                // อัปเดตค่าปัจจุบันให้เป็นค่าที่มากกว่าค่าก่อนหน้า
                arr[i] = arr[i - 1] + 1;
            }
        }
        
        // คืนค่าจำนวนครั้งที่ต้องเพิ่ม
        return increments;
    }
    
    public static void main(String[] args) {
        // ตัวอย่างการใช้งาน
        System.out.println(minIncrementForUnique(new int[]{1, 2, 2})); // 1
        System.out.println(minIncrementForUnique(new int[]{3, 2, 1, 2, 1, 7})); // 6
    }
}