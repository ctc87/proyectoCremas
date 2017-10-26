import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MyPost } from '../interfaces/mypost';
import { PostItem } from '../modulo_resultado/contenedorPostItem/post-item';
import { Producto } from '../modulo_resultado/productos/app.component.producto';


@Injectable()

export class MyPostService { 
        constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
	
	respuestas;
	
	loadComponent(viewContainerRef: ViewContainerRef, postItem: PostItem) {
	    let debug = true;
	    if(debug || postItem.data.seMuestra) {
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(postItem.component);
		
// 		viewContainerRef.clear();
		let componentRef = viewContainerRef.createComponent(componentFactory);
		let myPost: MyPost = <MyPost>componentRef.instance;
		myPost.post = postItem.data;
	    }

		
	}
	
      
      calcularConbinaciones(respuestas, id, servicioHttpConbinaciones) {
           let conb = servicioHttpConbinaciones.productosConbinaciones[id-1];
            for(var _i = 0; _i < conb.conbinaciones.length; _i++) {
                let auxiliarBooleano = true;
                for(var _j = 0; _j < conb.conbinaciones[_i].length; _j++) {
                    let element = conb.conbinaciones[_i][_j];
                    if(_j < 1) {
                        auxiliarBooleano = (
                            auxiliarBooleano && 
                            (Number(respuestas[element.id_pregunta - 1].respuesta) === element.id_respuesta)
                            );  
                    } else {
                        auxiliarBooleano = (
                            auxiliarBooleano && 
                            (Number(respuestas[element.id_pregunta - 1].subrespuestas[_j - 1]) === element.id_respuesta)
                            );  
                    }
                }
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
        // depurar
        if(index < 9) {
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
        }
        });
            return postArray;
        }
} 