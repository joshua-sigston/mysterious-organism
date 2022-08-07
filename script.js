// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
const newStrand = []
for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
}
return newStrand
}

function pAequorFactory(num, arr) {
    return {
        speciemenNum: num,
        dna: arr,
        mutate() {
            const oldBase = this.dna.indexOf(this.dna[Math.floor(Math.random()* this.dna.length)])

            let newBase
            do {
                newBase = returnRandBase()
                } 
            while (newBase === this.dna[oldBase])
            
            this.dna[oldBase] = newBase
            return this.dna
        },
        compareDNA(specimen) {
            let sameDNA = []
            for(let i = 0; i < this.dna.length; i++) {
                for(let j = 0; i < specimen.length; i++) {
                    if (specimen[i] === this.dna[i]) {
                        sameDNA.push(specimen[i])
                    }
                }
            }
            return sameDNA.length / 15
        },
        willLikelySurvive(arr) {
            let count = 0
            arr.forEach(element => {
                if(element === 'G' || element === 'C') {
                    count ++
                }
            });

            if ((count / 15) >= 0.6){
                return true
            } else {
                return false
            }
        },
        complementStrand() {
            let complementDNA = []
            this.dna.forEach( base => {
                if (base === 'A') {
                    complementDNA.push('T')
                } else if (base === 'T') {
                    complementDNA.push('A')
                } else if (base === 'G') {
                    complementDNA.push('C')
                } else if (base === 'C') {
                    complementDNA.push('G')
                } else {
                    complementDNA.push(base)
                }
            })
            return complementDNA
        }
    }
}

function createInstances(){
    let numOfInstances = 30
    let survivablepAequor = []
    for (let i = 1; i <= numOfInstances; i++) {
        const specimen = pAequorFactory(i, mockUpStrand())

        if (specimen.willLikelySurvive(specimen.dna) === true) {
            survivablepAequor.push(specimen.speciemenNum)
        }
    }
    return survivablepAequor
}

let specimen = pAequorFactory(1, mockUpStrand())
console.log(specimen.dna)
console.log(specimen.complementStrand(this.dna))






