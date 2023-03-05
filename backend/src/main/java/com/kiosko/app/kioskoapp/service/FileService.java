package com.kiosko.app.kioskoapp.service;

import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileService {
	private static final String FILE_DIRECTORY = "/home/user/web";
	private final Path rootLocation = Paths.get(FILE_DIRECTORY);

	public void storeFile(MultipartFile file, String ubicacion,String name) throws IOException {
		
		Path filePath = Paths.get(FILE_DIRECTORY + "/" + ubicacion + "/" + name+".jpg");
		
		Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
	}

	public Resource loadFile(String filename, String ubicacion) {
		try {
			Path file = rootLocation.resolve(ubicacion + "/" + filename);
			Resource resource = new UrlResource(file.toUri());
			if (resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new RuntimeException("FAIL!");
			}
		} catch (MalformedURLException e) {
			throw new RuntimeException("FAIL!");
		}
	}

	public boolean deleteFile(String filename, String ubicacion) {

		Path file = rootLocation.resolve(ubicacion + "/" + filename);
		File archivo = file.toFile();

		if (archivo.exists() && archivo.canRead()) {
			if (archivo.delete()) {
				return true;
			}
		}
		return false;
			
	}

}
