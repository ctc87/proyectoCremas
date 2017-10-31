import { Cuesto2 } from './quest2.interface';

export class survey {
	constructor(
        
        public id : number,
		public idPregunta : Object,		
		public idSubrespNivel1 : Object,
		public idSubrespNivel2 : Object,
		public idSubrespNivel3 : Object,
		public idSubrespuestas : Array<Object>,			
<<<<<<< HEAD
		public idTipocuestionario : Object,
		public idrespuestas: Array<Object>
	
		
=======
		//public idRespuesta : number,
		//public idSubrespuesta : number,
		public idTipocuestionario : Object,
		public idrespuestas: Array<Object>
		/*public idrespuesta1 : number,
		public idrespuesta2 : number,
		public idrespuesta3 : number,
		public idrespuesta4 : number,
		public idrespuesta5 : number,
		public idrespuesta6 : number,
		public idrespuesta7 : number,
		public idrespuesta8 : number,
		public idrespuesta9 : number,
		public idrespuesta10 : number,
		*/
>>>>>>> 546216b3782b21584cd7d28914e1acc3c6d3b073
	) { }
}