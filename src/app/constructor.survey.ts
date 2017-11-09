import { Cuesto2 } from './quest2.interface';

export class survey {
	constructor(
        
        public id : number,
		public idPregunta : Object,		
		public idSubrespNivel1 : Object,
		public idSubrespNivel2 : Object,
		public idSubrespNivel3 : Object,
		public idSubrespNivel4 : Object,
		public idSubrespNivel5 : Object,
		public idSubrespNivel6 : Object,
		public idSubrespuestas : Array<Object>,			
		public idTipocuestionario : Object,
		public idrespuestas: Array<Object>
	
		
	) { }
}