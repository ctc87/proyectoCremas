import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MyPost } from '../interfaces/mypost';
import { PostItem } from '../modulo_resultado/contenedorPostItem/post-item';
import { Producto } from '../modulo_resultado/productos/app.component.producto';


@Injectable()

export class MyPostService { 
        constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
	
	respuestas ;
	
	loadComponent(viewContainerRef: ViewContainerRef, postItem: PostItem) {
	   // console.log(postItem.data.seMuestra ? "si" : "no")
	    if(postItem.data.seMuestra) {
    		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(postItem.component);
    		
    // 		viewContainerRef.clear();
    		let componentRef = viewContainerRef.createComponent(componentFactory);
    		let myPost: MyPost = <MyPost>componentRef.instance;
    		myPost.post = postItem.data;
	    }

		
	}
	
      
      calcularConbinaciones(respuestas, id, servicioHttpConbinaciones) {
        //   console.log(JSON.stringify(respuestas))
           let conb = servicioHttpConbinaciones.productosConbinaciones[id-1];
            for(var _i = 0; _i < conb.conbinaciones.length; _i++) {
                let auxiliarBooleano = true;
                for(var _j = 0; _j < conb.conbinaciones[_i].length; _j++) {
                    let element = conb.conbinaciones[_i][_j];
                    if(!element.subrespuesta) {
                        // console.log("id resp", Number(respuestas[element.id_pregunta - 1].resp))
                        // console.log("id resp en conb", element.id_respuesta)
                        auxiliarBooleano = (
                            auxiliarBooleano && 
                            (Number(respuestas[element.id_pregunta - 1].resp) === element.id_respuesta)
                            ); 
                    } else {
                        // console.log("id subresp", respuestas[element.id_pregunta - 1].subresp[_j - 2])
                        // console.log("id resp en conb", element.id_respuesta)
                        auxiliarBooleano = (
                            auxiliarBooleano && 
                            (Number(respuestas[element.id_pregunta - 1].subresp[_j - 2].id) === element.id_respuesta)
                            );  
                    }
                }
                if(auxiliarBooleano)
                    console.log(conb.producto )
                if(auxiliarBooleano) {
                    return true;
                }
            }
            return false;
      }
	
	
	
	getAllPosts(productoss, resp, httpConbinaciones) {
	    let postArray = [];
	    let that = this
	    this.respuestas = resp;
	    
	   productoss.forEach(function(element, index) {
	       //if(index < 1) {
           let obj = {
               id : element.id, 
               producto : element.producto,
               descripcion : element.descripcion,
               rutaImagen : element.rutaImagen,
               rutaInfo : element.rutaInfo,
               httpConbinaciones : httpConbinaciones,
               seMuestra: that.calcularConbinaciones(resp, element.id, httpConbinaciones)
           }
          
          postArray.push(new PostItem(Producto, obj));
	       //}
        });
            return postArray;
        }
} 