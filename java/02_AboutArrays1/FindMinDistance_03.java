public class FindMinDistance_03 {
    // ฟังก์ชันสำหรับหาระยะห่างที่น้อยที่สุดระหว่าง x และ y ในอาเรย์
    public static int findMinDistance(int[] arr, int x, int y) {
        // กำหนดตำแหน่งเริ่มต้นของ x และ y เป็น -1
        int posX = -1, posY = -1;
        // กำหนดระยะห่างที่น้อยที่สุดเป็นค่ามากที่สุดของ Integer
        int minDist = Integer.MAX_VALUE;
        
        // วนลูปผ่านอาเรย์
        for (int i = 0; i < arr.length; i++) {
            // ถ้าพบ x ในอาเรย์ ให้บันทึกตำแหน่ง
            if (arr[i] == x) posX = i;
            // ถ้าพบ y ในอาเรย์ ให้บันทึกตำแหน่ง
            else if (arr[i] == y) posY = i;
            
            // ถ้าพบทั้ง x และ y ในอาเรย์
            if (posX != -1 && posY != -1) {
                // คำนวณระยะห่างระหว่างตำแหน่งของ x และ y และอัปเดตระยะห่างที่น้อยที่สุด
                minDist = Math.min(minDist, Math.abs(posX - posY));
            }
        }
        // ถ้าไม่พบ x หรือ y ในอาเรย์ ให้คืนค่า -1
        // ถ้าพบทั้ง x และ y ให้คืนค่าระยะห่างที่น้อยที่สุด
        return minDist == Integer.MAX_VALUE ? -1 : minDist;
    }
    
    public static void main(String[] args) {
        // ตัวอย่างการใช้งาน
        System.out.println(findMinDistance(new int[]{3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3}, 3, 6)); // 4
    }
}