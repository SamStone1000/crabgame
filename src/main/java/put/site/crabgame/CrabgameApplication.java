package put.site.crabgame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CrabgameApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrabgameApplication.class, args);
	}
	
	@GetMapping("/responder")
	public String responder() {
		return "This is a response";
	}

}
