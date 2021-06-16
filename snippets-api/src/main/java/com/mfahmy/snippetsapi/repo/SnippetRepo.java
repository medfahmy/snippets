package com.mfahmy.snippetsapi.repo;

import com.mfahmy.snippetsapi.entity.Snippet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SnippetRepo extends JpaRepository<Snippet, Long> {

}
