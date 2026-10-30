import java.util.Scanner;
    public class studentGrade{
        public static void main(String[]args){   
Scanner sc = new Scanner(System.in);
System.out.print(" \n ========== STUDENT GRADE ========== ");
   
System.out.println("\n How many students do you have?: ");
    int students = sc.nextInt();

System.out.println("\n How many subjects do they offer?: \n Saving >>>>>>>> \n Saved successfully ");
    int subjects = sc.nextInt();
    
String[] studentNames = new String[students];
String[] subjectNames = new String[subjects];
int[][] scores = new int[students][subjects];

for (int index = 0; index < students; index++) {

System.out.print("Enter student " + (index + 1) + " name: ");
studentNames[index] = sc.next();
 }


for (int count = 0; count < subjects; count++) {

System.out.print("Enter subject " + (count + 1) + ": ");
subjectNames[count] = sc.next();

}

     for (int index = 0; index < students; index++) {

            System.out.println("\nEnter scores for " + studentNames[index]);

            for (int count = 0; count < subjects; count++) {

                System.out.print(subjectNames[count] + ": ");
                int score = sc.nextInt();

              
                while (score < 0 || score > 100) {

                    System.out.println("Invalid score! Enter a score between 0 and 100.");

         int total = 0;
double average = (double) total / subjects;

            System.out.println(total + "\t" + average);

        }

        System.out.println("==============================================================");

       

    }
}



