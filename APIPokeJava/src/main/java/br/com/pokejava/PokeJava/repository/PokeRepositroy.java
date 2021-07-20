package br.com.pokejava.PokeJava.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.pokejava.PokeJava.models.Pokemon;

public interface PokeRepositroy extends JpaRepository<Pokemon, Long> {
		
	Pokemon findById(long id);
}
