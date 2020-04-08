indicators = 
[  
	'RFM16',
	'TN16',
	'PM16',
	'NSP19',
	'DP16',
	'PGP19',
	'PGP19_>60',
	'PC16-15_24',
	'PC16-15_64',
	'PPop16_<18',
	'PPop16_>65',
	'PRP16'
	]


ind_names = 
[	
	['RFM16'		, 'Revenu fiscal médian 2016'], 
	['TN16'			, 'Taux de natalité 2016'], 
	['PM16'			, 'Population municipale 2016'],
	['NSP19'		, 'Nombre de sites et sols pollués (ou potentiellement pollués) 2019'],
	['DP16'			, 'Densité de Population 2016'],
	['PGP19'		, 'Part de médecins généraliste libéral au 31/12/2019'], 
	['PGP19_>60'  	, 'Part de médecins généraliste libéral de plus de 60 ans au 31/12/2019'],
	['PC16-15_24'	, 'Part de chômeurs chez les 15-24 ans (RP) 2016'],
	['PC16-15_64'	, 'Part de chômeurs chez les 24-64 ans (RP) 2016'],
	['PPop16_<18' 	, 'Part de population des moins de 18 ans 2016'], 
	['PPop16_>65' 	, 'Part de population des 65 ans ou plus 2016'],
	['PRP16'	 	, 'Part de résidences principales en HLM 2016']
]

ind_names = new Map(ind_names)


icones = 
[
	['RFM16'		, "./icone/revenus.svg"],
	['TN16'			, "./icone/biberon.svg"],
	['PM16'			, "./icone/habitants.svg"],
	['NSP19'		, "./icone/pollution.svg"],
	['DP16'			, ""], // Manque une icone
	['PGP19'		, "./icone/Médecin.svg"],
	['PGP19_>60'		, "./icone/Médecin.svg"], 
	['PC16-15_24'	, "./icone/recherche_emploi.svg"],
	['PC16-15_64'	, "./icone/recherche_emploi.svg"],
	['PPop16_>65'	, "./icone/habitants2.svg"], 
	['PPop16_<18'	, "./icone/under18.svg"],
	['PRP16'		, "./icone/hlm.svg"]
]

icones = new Map(icones)