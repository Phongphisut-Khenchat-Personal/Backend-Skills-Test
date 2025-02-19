// โจทย์:หาระยะห่างและตำแหน่งของอาเรย์
// ให้ฟังก์ชัน findDistance(arr, num1, num2) คำนวณระยะห่างระหว่างค่าที่กำหนด (num1 และ num2) ในอาเรย์ arr และคืนค่าระยะห่างของตำแหน่งที่ใกล้ที่สุด
// หากไม่มีค่าใดในอาเรย์เท่ากับ num1 หรือ num2 ให้คืนค่า -1
// ตัวอย่างเช่น findDistance(new int[]{1, 3, 7, 5, 3, 7, 1}, 3, 7) ควรคืนค่า 1 เพราะตำแหน่งที่ใกล้ที่สุดระหว่าง 3 และ 7 คือ 2 และ 3 ซึ่งตำแหน่งห่างกัน 1 ตำแหน่ง

public class arrayDistance_01 {
    // ฟังก์ชันคำนวณระยะห่างระหว่างค่าที่กำหนดในอาเรย์
    public static int findDistance(int[] arr, int num1, int num2) {
        int pos1 = -1, pos2 = -1, minDist = Integer.MAX_VALUE; // กำหนดค่าเริ่มต้นของตำแหน่งและระยะห่าง

        // วนลูปผ่านอาเรย์
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == num1) pos1 = i; // ถ้าพบ num1 ให้บันทึกตำแหน่ง
            if (arr[i] == num2) pos2 = i; // ถ้าพบ num2 ให้บันทึกตำแหน่ง
            if (pos1 != -1 && pos2 != -1) { // ถ้าพบทั้งสองค่าแล้ว
                minDist = Math.min(minDist, Math.abs(pos1 - pos2)); // คำนวณระยะห่างที่น้อยที่สุด
            }
        }

        return minDist == Integer.MAX_VALUE ? -1 : minDist; // คืนค่าระยะห่างที่น้อยที่สุด หรือ -1 ถ้าไม่พบค่าที่กำหนด
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 7, 5, 3, 7, 1};
        System.out.println(findDistance(arr, 3, 7)); // 1
        System.out.println(findDistance(new int[]{4, 8, 6, 3, 8, 9, 3}, 8, 3)); // 2
        System.out.println(findDistance(new int[]{1, 2, 3, 4, 5}, 6, 7)); // -1
    }
}