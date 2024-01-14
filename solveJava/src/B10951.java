import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B10951 {
  public static void main(String[] args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String input = "";
    while ((input = br.readLine()) != null) {
      String[] k = input.split(" ");
      System.out.println(Integer.parseInt(k[0])+Integer.parseInt(k[1]));
    }
  }
}
