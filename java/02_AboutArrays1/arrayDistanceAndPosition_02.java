import java.util.*;

public class arrayDistanceAndPosition_02 {
    public int minDistance;
    public int maxDistance;
    public Map<Integer, List<Integer>> positions;

    @Override
    public String toString() {
        return "ArrayAnalysis{" +
               "minDistance=" + minDistance +
               ", maxDistance=" + maxDistance +
               ", positions=" + positions +
               '}';
    }

    public static arrayDistanceAndPosition_02 arrayDistanceAndPosition(int[] array) {
        arrayDistanceAndPosition_02 analysis = new arrayDistanceAndPosition_02();
        analysis.positions = new HashMap<>();

        for (int i = 0; i < array.length; i++) {
            analysis.positions.computeIfAbsent(array[i], k -> new ArrayList<>()).add(i);
        }

        analysis.minDistance = Integer.MAX_VALUE;
        analysis.maxDistance = Integer.MIN_VALUE;

        for (List<Integer> posList : analysis.positions.values()) {
            if (posList.size() > 1) {
                for (int i = 1; i < posList.size(); i++) {
                    int distance = posList.get(i) - posList.get(i - 1);
                    analysis.minDistance = Math.min(analysis.minDistance, distance);
                    analysis.maxDistance = Math.max(analysis.maxDistance, distance);
                }
            }
        }

        if (analysis.minDistance == Integer.MAX_VALUE) {
            analysis.minDistance = 0; // No repeated elements
        }

        return analysis;
    }

    public static void main(String[] args) {
        // ทดสอบการวิเคราะห์อาเรย์
        System.out.println(arrayDistanceAndPosition(new int[]{1, 2, 1, 3, 2, 1}));
    }
}