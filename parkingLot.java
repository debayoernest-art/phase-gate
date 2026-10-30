
import java.util.Scanner;

public class parkingLot{

    static Scanner input = new Scanner(System.in);

    static String[] parkingLots = new String[20];
    

    public static void main(String[] args) {

        

        slots[0] = new string[10][10];
        

        for(int i = 0; i < parkingLots; i++) {
            for (int j = 0; j < slot[i].length; j++) {
                for (int k = 0; k < slot[i][j].length; k++) {
                    slot[i][j][k] = 'O';
                }
            }
        }

        int choice;

        do {
            System.out.println("\n==============================");
            System.out.println("MINI PARKING SYSTEM");
            System.out.println("==============================");
            System.out.println("1. View all SLOTS");
            System.out.println("2. Ballot for a slot");
            System.out.println("3. Display available slots");
            System.out.println("4. Exit");
            System.out.print("Choose an option: ");

          choice = input.nextInt();
                

            switch (choice) {
                case 1:
                    viewSlots();
                    break;

                case 2:
                    ballotSlot();
                    break;
              case 3:
                    int lot1 = selectLot();
                    if (lot1 != -1) {
                        displayAvailableSlots(lot2);
                    }
                    break;  

            case 4:
                    System.out.println("Thank you for using our system!");
                    break;

                default:
                    System.out.println("Invalid option!");

     } 
          

        } while (choice != 4);

       
    }

    
    public static void viewSlots() {

        System.out.println("\nCLICK TO VIEW SLOT");

        for (int i = 0; i < parkingLots; i++) {
            System.out.println((i + 1) + ". "
                    + parkingLots[i] + " - "


            System.out.println("Total slots: "
                    + (slots[i].length * slotts[i][0].length));
        }
   
 System.out.println("O = Empty, X = Occupied");

}

   
    public static void ballotSlot() {

        int lot1 = selectlot1();

        if (lot1 == -1) {
            return;
        }

       
        }
    }

    
    public static void displayAvailableSlots(int lot) {

        System.out.println("\nAvailable Slots");

        int available = 0;

        for (int i = 0; i < slots[lot].length; i++) {
            for (int j = 0; j < slots[lot][i].length; j++) {

                if (seats[lot][i][j] == 'O') {
                    System.out.print((i + 1) + "-" + (j + 1) + " ");
                    available++;
                }
            }
        }

        if (available == 0) {
            System.out.println("No available slots.");
        } else {
            System.out.println("\nAvailable slots: " + available);
        }
    }


        input.nextLine();

        

        System.out.print("Enter number of rows: ");
        int rows = input.nextInt();

        System.out.print("Enter slot per row: ");
        int columns = input.nextInt();

        if (rows <= 0 || columns <= 0) {
            System.out.println("Rows and slot must be greater than zero!");
            return;
        }

        
        

        System.out.println("Lot added successfully");
    }
}

