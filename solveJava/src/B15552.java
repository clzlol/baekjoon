import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B15552 {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int t = Integer.parseInt(br.readLine());
    StringBuilder sb = new StringBuilder();

    while(0 != t--) {
      String[] k = br.readLine().split(" ");
      sb.append((Integer.parseInt(k[0]) + Integer.parseInt(k[1])) + "\n");
    }
    br.close();
    System.out.println(sb);
  }  

}
