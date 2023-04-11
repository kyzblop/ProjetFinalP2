import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExperienceService } from '../service/experience.service';
import { Router } from '@angular/router';
import { UtilisateurService } from '../service/utilisateur.service';
import { Utilisateur } from '../model/utilisateur.model';
import { Observable, map } from 'rxjs';
import { Experience } from '../model/experience.model';
import { ExperienceComplet } from '../experience-complet';
import { Ville } from '../model/ville.model';
import { VilleService } from '../service/ville.service';
import { Trajet } from '../model/trajet.model';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-formulaire-experience-generale',
  templateUrl: './formulaire-experience-generale.component.html',
  styleUrls: ['./formulaire-experience-generale.component.css']
})
export class FormulaireExperienceGeneraleComponent {

  constructor (private fb:FormBuilder, private es:ExperienceService, private rout:Router, private us:UtilisateurService, private vs:VilleService) {}

  etape!:number //Etape dans le formulaire: - etape 1 : renseigner destination, description ...
                                            //-etape2 : renseigner les villes du voyage
                                            // etape 3 : renseigner les compagnies du voyage
  experienceForm1!:FormGroup;
  experienceForm2!:FormGroup;
  experienceForm3!:FormGroup;

  iduser!:string|null
  listeResto$!:Observable<Restaurant[]>
  villeForm!:FormGroup;
  restaurantForm!:FormGroup;

  creerRest=false;
  creerVill=false;
  v!:Ville;
  idCompagnies!:number[]
  payload!:ExperienceComplet
  villes$!:Observable<Ville[]>
  Ltrajets!:Trajet[]
  ngOnInit(): void {
    this.etape=1
    this.villes$=this.vs.getVille()
    this.iduser=localStorage.getItem('currentUser')
    
   
    console.log(this.iduser)
    this.experienceForm1 = this.fb.group({
      destination:[null],
      description:[null],
      photo:[null],
      rating_moyen:[null]

    })

    this.villeForm = this.fb.group({
      Ville:[null],

    })

    this.restaurantForm = this.fb.group({
      listeRestaurant:[null],
    })

  }



  creerVille(){
    this.creerVill=!this.creerVill
  }

  creerResto(){
    this.creerRest=!this.creerRest
  }
  
  

 


  saveExperience():void{
    console.log(this.experienceForm2.value.villes)
    console.log(JSON.stringify(this.experienceForm2.value.villes))
    
    //this.payload=new ExperienceComplet(this.experienceForm1.value.destination,this.experienceForm1.value.description,this.experienceForm1.value.photo,this.experienceForm1.value.rating_moyen,new Utilisateur(parseInt(this.iduser!),"","","","","","",""),this.Ltrajets[0],this.experienceForm2.value.villes)
    
    console.log(this.payload)
    //this.payload.setuser(new Utilisateur(parseInt(this.iduser!),"","","","","","",""))
    
    console.log(JSON.stringify(this.payload))
    //this.experienceFormCompl$=this.experienceForm.valueChanges.pipe(map(
     // formValue=>({
     //   ...formValue,
     //   u:{"id_U":this.iduser}})))
     //   console.log(this.experienceForm.value)


   this.es.addexpwithusertest(this.payload).subscribe();


    //this.rout.navigate(['trajet']);
  }

  validerVille(){
    this.etape+=1
  }

  validerResto(){
    //console.log(this.restaurantForm.value.listeRestaurant)
    console.log(this.experienceForm1.value,this.iduser,this.restaurantForm.value,this.villeForm.value)
  }

  retour(){
    this.etape-=1
    
  }
  validExp(){
    console.log(this.experienceForm1.value)
    console.log(this.villeForm.value.Ville.id_ville)
    this.listeResto$=this.es.getRestaurantByVille(this.villeForm.value.Ville.id_ville)
    this.etape+=1
    
    
  }

  getTrajets(trajets:Trajet[]){
    this.Ltrajets=trajets
    console.log("composant parent: "+JSON.stringify(this.Ltrajets[0]))
    console.log(this.payload)
    this.saveExperience()
  }

}
