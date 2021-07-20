package br.com.pokejava.PokeJava.resouce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pokejava.PokeJava.models.Pokemon;
import br.com.pokejava.PokeJava.repository.PokeRepositroy;

@RestController
@RequestMapping(value="/api")
public class PokeResource {
	
	@Autowired
	PokeRepositroy pokerepository;
	
	@GetMapping("/pokemon")
	public List<Pokemon> ListaPokemon(){
		return pokerepository.findAll();
	}
	
	@GetMapping("/pokemon/{id}")
	public Pokemon listaPokemonUnico(@PathVariable(value="id") long id) {
		return pokerepository.findById(id);
	}

}
