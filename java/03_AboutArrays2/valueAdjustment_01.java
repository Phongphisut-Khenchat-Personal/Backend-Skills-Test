// โจทย์:คำนวณค่าที่ต้องเพิ่มเพื่อให้เป็นไปตามเงื่อนไข
// ให้ฟังก์ชัน adjustArray(arr, targetSum) รับอาเรย์ของตัวเลข arr และค่าผลรวมเป้าหมาย targetSum 
// และหาค่าที่ต้องเพิ่มให้กับตัวเลขตัวใดตัวหนึ่งเพื่อให้ผลรวมอาเรย์เท่ากับ targetSum โดยคืนค่าความแตกต่างที่ต้องเพิ่ม
// ตัวอย่างเช่น adjustArray(new int[]{10, 20, 30}, 100) ควรคืนค่า 40 เพราะต้องเพิ่ม 40 ให้กับตัวเลขใดตัวหนึ่งเพื่อให้ผลรวมเท่ากับ 100

public class valueAdjustment_01 { 
    // ฟังก์ชันคำนวณค่าที่ต้องเพิ่มเพื่อให้ผลรวมของอาเรย์เท่ากับ targetSum
    public static int adjustArray(int[] arr, int targetSum) {
        int currentSum = 0; // ตัวแปรสำหรับเก็บผลรวมปัจจุบันของอาเรย์
        for (int num : arr) { // วนลูปผ่านอาเรย์
            currentSum += num; // บวกค่าของแต่ละตัวเลขในอาเรย์เข้ากับผลรวมปัจจุบัน
        }
        return targetSum - currentSum; // คืนค่าความแตกต่างที่ต้องเพิ่มเพื่อให้ผลรวมเท่ากับ targetSum
    }

    public static void main(String[] args) {
        // ทดสอบฟังก์ชันด้วยตัวเลขต่างๆ
        System.out.println(adjustArray(new int[]{10, 20, 30}, 100)); // 40
        System.out.println(adjustArray(new int[]{5, 15, 10}, 50)); // 20
        System.out.println(adjustArray(new int[]{2, 4, 6, 8}, 30)); // 10
    }
}