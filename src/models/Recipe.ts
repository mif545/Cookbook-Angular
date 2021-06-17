export class Recipe{
    constructor(public Code:number,public Name:String,
        public CodeCategory:number,public PreparationTime:number,
        public LevelDifficulty:number,public DateAddingRecipe:Date,
      public Ingredients:string[],public Preparation:string[],
        public UserCode:String,public Image:String,
        public ViewImage:Boolean){
       
       
    }
}