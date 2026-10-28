
import java.util.Arrays;

public class arrayTask1 {

    public static void sort(int[][] array) {

        for (int i = 0; i < array.length; i++) {

            int start = 0;
            int end = array[i].length - 1;

            while (start < end) {

                int temp = array[i][start];
                array[i][start] = array[i][end];
                array[i][end] = temp;

                start++;
                end--;
            }
        }
    }

    public static void main(String[] args) {

        int[][] array = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        sort(array);

        System.out.println(Arrays.deepToString(array));
    }
}





















































