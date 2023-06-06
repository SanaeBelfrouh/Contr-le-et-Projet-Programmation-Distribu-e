package org.sid.immatriculation.web.soap;

import jakarta.jws.WebMethod;
import jakarta.jws.WebParam;
import jakarta.jws.WebService;
import lombok.AllArgsConstructor;
import org.sid.immatriculation.entities.Owner;
import org.sid.immatriculation.repositories.OwnerRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@WebService
@AllArgsConstructor
public class OwnerSoapService {
    private OwnerRepository ownerRepository;

    @WebMethod
    public List<Owner> getOwners(){
        return ownerRepository.findAll();
    }

    @WebMethod
    public Owner getOwnerById(@WebParam(name = "id") Long id){
        Owner owner = ownerRepository.findById(id).orElse(null);
        return owner;
    }

    // Add the following methods to match the REST service functionality

    @WebMethod
    public Owner saveOwner(Owner owner){
        return ownerRepository.save(owner);
    }

    @WebMethod
    public Owner updateOwner(Long id, Owner owner){
        owner.setId(id);
        return ownerRepository.save(owner);
    }

    @WebMethod
    public boolean deleteOwner(Long id){
        if (ownerRepository.existsById(id)) {
            ownerRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    @WebMethod
    public boolean ownerExists(Long id){
        return ownerRepository.existsById(id);
    }
}
