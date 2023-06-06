package org.sid.immatriculation;

import org.sid.immatriculation.entities.Infraction;
import org.sid.immatriculation.repositories.InfractionRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@AllArgsConstructor
public class InfractionServiceApplication implements CommandLineRunner {

	private final InfractionRepository infractionRepository;

	public static void main(String[] args) {
		SpringApplication.run(InfractionServiceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// Add some infractions
		for(int i = 0; i < 8; i++) {
			Infraction infraction = Infraction.builder()
					.id(null)
					.date("2023-01-01")
					.vehicleSpeed(110.0 + i*10)
					.radarMaxSpeed(100.0 + i*10)
					.fineAmount(100.0 + i*10)
					.radarId(3L)
					.vehicleId(5L)
					.build();
			infractionRepository.save(infraction);
			System.out.println(infraction);
		}
	}
}
