public class digitSum_03 {
    // ฟังก์ชันสำหรับหาผลรวมของตัวเลขแต่ละหลัก
    public static int sumDigits(int num) {
        int sum = 0;
        // แปลงตัวเลขเป็นค่าบวกและแปลงเป็นสตริง
        String str = String.valueOf(Math.abs(num));
        
        // วนลูปผ่านแต่ละตัวอักษรในสตริง
        for (int i = 0; i < str.length(); i++) {
            // แปลงตัวอักษรเป็นตัวเลขและเพิ่มไปยังผลรวม
            sum += Character.getNumericValue(str.charAt(i));
        }
        
        // คืนค่าผลรวม
        return sum;
    }
    
    public static void main(String[] args) {
        // ตัวอย่างการใช้งาน
        System.out.println(sumDigits(123)); // 6
        System.out.println(sumDigits(-456)); // 15
    }
}