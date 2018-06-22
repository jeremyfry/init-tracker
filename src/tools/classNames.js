export default function(requiredClasses, optionalClasses){
	const optional = Object.keys(optionalClasses).map((key) =>{
		return optionalClasses[key] ? key : ''
	});
	return [...requiredClasses, ...optional].join(' ');
}
