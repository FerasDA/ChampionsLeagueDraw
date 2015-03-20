import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class Last8 {

    public static void main(String[] args) {
        Map<String, String> drawMatches = new HashMap<String, String>();
        ArrayList<String> teams = new ArrayList<String>();
        teams.add("Real Madrid");
        teams.add("Atletico Madrid");
        teams.add("Barcelona");
        teams.add("Paris Saint Germain");
        teams.add("Monaco");
        teams.add("Bayern Munich");
        teams.add("Porto");
        teams.add("Juventus ");

        Random randomGenerator;

        randomGenerator = new Random();
        int index1 = randomGenerator.nextInt(teams.size());
        String t1 = teams.remove(index1);
        randomGenerator = new Random();
        int index2 = randomGenerator.nextInt(teams.size());
        String t2 = teams.remove(index2);
        drawMatches.put(t1, t1);
        System.out.println("Match 1: " + t1 + " vs. " + t2);

        randomGenerator = new Random();
        int index3 = randomGenerator.nextInt(teams.size());
        String t3 = teams.remove(index3);
        randomGenerator = new Random();
        int index4 = randomGenerator.nextInt(teams.size());
        String t4 = teams.remove(index4);
        drawMatches.put(t3, t4);
        System.out.println("Match 2: " + t3 + " vs. " + t4);

        randomGenerator = new Random();
        int index5 = randomGenerator.nextInt(teams.size());
        String t5 = teams.remove(index5);
        randomGenerator = new Random();
        int index6 = randomGenerator.nextInt(teams.size());
        String t6 = teams.remove(index6);
        drawMatches.put(t5, t6);
        System.out.println("Match 3: " + t5 + " vs. " + t6);

        randomGenerator = new Random();
        int index7 = randomGenerator.nextInt(teams.size());
        String t7 = teams.remove(index7);
        randomGenerator = new Random();
        int index8 = randomGenerator.nextInt(teams.size());
        String t8 = teams.remove(index8);
        drawMatches.put(t7, t8);
        System.out.println("Match 4: " + t7 + " vs. " + t8);

    }

}
