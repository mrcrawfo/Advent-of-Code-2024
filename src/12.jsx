const demoInput = [
	"RRRRIICCFF",
	"RRRRIICCCF",
	"VVRRRCCFFF",
	"VVRCCCJFFF",
	"VVVVCJJCFE",
	"VVIVCCJJEE",
	"VVIIICJJEE",
	"MIIIIIJJEE",
	"MIIISIJEEE",
	"MMMISSJEEE",
];

const exampleInput1 = ["AAAA", "BBCD", "BBCC", "EEEC"];

const exampleInput2 = ["OOOOO", "OXOXO", "OOOOO", "OXOXO", "OOOOO"];

const exampleInput3 = ["EEEEE", "EXXXX", "EEEEE", "EXXXX", "EEEEE"];

const exampleInput4 = [
	"AAAAAA",
	"AAABBA",
	"AAABBA",
	"ABBAAA",
	"ABBAAA",
	"AAAAAA",
];

const testInput = [
	"IIIIIIIIIIIIIIIIIIIIIUUUUUUUUJLLLLAAAAAAMMMAUUUUPPXPZZZZZZZZZZZXXXXXXXXXXXXXXXXXXXXXFFFFFFFFFFZZZZZZZZZTTTTTTTVVVVVVVVVVPVRRRRRJOYOOOOOOOOOO",
	"IIIIIIIIIIIIIIIIIIIIUUUUUUUUUJALEAAAAAAAAAAAAUUUUPXPPZZZZZHHHHHHXHXXXXXXXXXXXXXXXXXXFXFFFFFFFFZZZZZZZZZTTTTTTTTVVVVVVVVVVVRRRSRROOOOOOOOOOOO",
	"IIIIIIIIIIIIIIIIIIIIUUUUUUUUUJAAAAAAAAAAAAAAUUPPPPPPPZZZZZZZHHHHHHHXXXXXXXXXXXXXXXXXXXFFFFFFFFFZZZZZZZTTTTTTTTTVVVVVVVVVVVRRSSKKOOOOOOOOOOOO",
	"IIIIIIIIIIIAAIIIIIIIIIUUUUUUUJJAAAAAAAAAAAAAAVVPPPPPPPPZHHHHHHHHHHHXXXXXXXXXXXXXXXXXFFFFFFFFFFFZZZZZZZTTTTTTTTVVVVVVVVKVVVVDSSSSOOOOOOOOOOOO",
	"IOOIIIIIIIIAAIIIIIIIIIIUUUQVUJJAAAAAAAAAAAAAEVVZPPPPPPPHHHHHHHHHHHHXXXXXXXXXXXXXXXXXXXXFFFFFFLLLLALLLLTTTTTTTTVVVVVVVVVVVVVVSSSSOOOOOOOOOOOO",
	"OOOOOOOOIIAAAAAIIIIIIIIUQQQQVQJAAAAAAAAAAAAAAVVPPPPPIIHHHHHHHHHHHHHXXXXXUXXXXXXUUXXBBBSFFFLLLLLLLLLLLLLLTTTTTTVVVVVVVVVVVVVCCSSSSSOOOOOOOOOO",
	"OOOOOOOOIAAAAAAIIIIIIQQQQQQQQQQQEADDAAAAAAAAHHVVPPPIIIIHHHHHHHHHHHHHXXXUUUUUXXUUUXXBBBSFFFLLELLLLLLLLLLTTTTTTTVVVVVVVVVVVFVCCCYSSJJVOOOOOOOO",
	"OOOOOOOOIIIAAIIIIIQQQQQQQQQQTQJQEEDDDAAAAAAHHVVVVPIIIIIHHHHHHHHHHHHHXUUUUUUUUUUUMMXBBBSSSFFFLLLLLLLLLLLLTTTTTTTWVVVVVVVVVVVSYYYYSJJVOOOOOOOS",
	"OOOOOWWIIIIIIIIIIIQQQQQQQQQQTQJDDDDDDAAAHAHHHHVVIIIIIIIHIIIHHHHHHHHHUUUUUUUUUUUUMMSSBBSSSSFFFLLLLLLLLLLLTTTTTTTWVVVVVVVVVVZSHYYYSSJJOOOOOOOS",
	"OOOOOEWIIIIIIIIDIIIQQQQQQQQQQQDDDDDDDDAHHHHHHHVHIIIIIIIIIIIHHHHHHHHHUUUUUUUUUUUUMMMSSSSSSLFLFLLLLLLLLLLLTTTTTTWWWWVVVVVUVUSSSYSSSJJJJSSSSOSS",
	"OOOWOWWIIIDDDIDDDDIQQQQQQQQQQQQJDDDDDDAHHGGHFFVHIIIIIIIIIIIHHHHHHHLHUUUUUUUUUUUMMMSSSSSSSLLLLLLLLLLLLLLTTTTTWWWWWWVVVVVUUUSLSSSSSJJJSSSSSSSS",
	"OOWWWWWWDDDDDDDDDQQQQQQQQQQQQQQDDDDDGGGGGGHHFFHHIIIIIIIIIHHHHHHHHHLLLLLLUUUUUUUMMMIIISSSSSRRRLLLLLLLLLLTTTTWWWWWWWVVVVVUULLLSSSSSSSSSSSSSSSS",
	"OWWWWWWWKDDDDDDDDQQQQQQQQQQQQQNODDGGGGGGGGGHFFFHHHHIIIIIIHHHHHLLHHLLLLLUUUUUUUUIMIIIISSSSRRRRRLLLLLLLLLTTTTWWWWWWWVWVVUUULLLSSSSSZSSSSSSSSSS",
	"OWWWWWWWWDDDDDDDDQQNQQQQQQQNNNNGGGGGGGGGGGGHHHHHHHIIIIIIIIHHHLLLLLLLLUUUUUUIUUIIIIIIIISSRRRRRLLLLLLLLLLQTTTTWWWWWWWWWVULLLLLLLSSSZSSSSSAASSS",
	"OVVWWWWWWDDDDDDDDNNNQNQQQQQNNNNNGGGGGGGGGGGGYHHHHHHIIIIIIIIHLLLLLLLLUUUUUUUIIIIIIIIIIRSSSRRRRRRHLLLQQQQQTTTWWWWWWWWWWUUULLLLLLSZSZSZSSSAASSS",
	"OOVWWWDDDDDLLLADDNNNNNNQQQQNNNNNHHGGGGQIGGGYYYHHHIIIIIIIIILHLLLLLLLLLLUUUUUIIIIIIIIIIRRRRRRRRRRRLLYDQQQTTTWWWWWWWWWWUULLLLLLLLLZZZSZSAAASSSS",
	"OOOOWWWDDDDLLLLDNNNNNNNNQQNNNNIIIIGGIIIIRGYYYHHHHHHIHHHIILLLLLLLLLLLLLLUUUUIIIIIIIIIIRRRRRRRRRRRTYYYQQQWWWWWWWWWWWWWUWLCLLLLLLZZZZZZZAAAAASS",
	"DOOWWWDDDDDLLLLLLNNNNNNQQQNNNIIIIIGIIIIIIYYYYHHHHHHHHHIIIILLLLLLLLLLLUUUUUUDDIIIIIIIIRRRRRRRRRRYYYYYYYYDJJWWWWWWWWWWWWCCLLLLLLZZZZZZZAAAAAAS",
	"DODWWWDDLLLLLLLLLLLLLNNNNNNIIIIIIIIIIIIIIYYYYWHHHCCCHHCCCICLLLLLLLLLLUUUUUUDIIIIIIIIIIRRRRRRTTRHHHYYYJJJJJJWWWWWWWWWCCCCLLLLLZZZZZZZZAAAAAAA",
	"DDDDWDDDLLLLLLLLLLLLLNNNNNNNIIIIIIIIIIIIHYYYRWHHHCCMCCCCCCCLLLLLLLLLLUUUUUUUIIIIIIHIIIIHRRRRRXXXXHYYYJJJJJJWWWWWWWWWCCCCCCCZZZZZZZZZAAAAAAAA",
	"DDDDDDDDDLLLLLLLLLLLLNNNNNNNIIUUIIIIIIIIIYYWRWHHHCCCCCCCCCLLLLLLLLLULUUUUUUUUUIIIHHHIHHJYYYRXXXXXXYYYYJJJJWWWWWWWWWWTTCCCCCCCGZGGZAAAAAAAAAA",
	"DDDDDDDDDLLLLLLLLLLLNNNNNNNNNNIIIIIIIIIOIFYWWWWHHCCCCCCCCCCCLLLLDLDUUUUUUUUUUHHHIHHHHHJJYJYRYYXXXXXXYYXBJJJJFFTTWWWTTTCCCCCGGGGGGGAAAAAAAAAA",
	"DDDDDDDDDDLLLLLLLLLLLNNWWNNNNNNNIIIIIIIIIWWWWWWWWCCCCCCCCCCCCLCDDDDUUUUUUUUUUHHHIHHHHJJJJJYYYXXXXXXXXXXJJJOOOFTTTTTTTTTTTTGGGGGGGGAAAAAAAAAA",
	"DDDDDDDDDDLLLLLLLLLLLNNWWNGGGGGIIIIIJJIEEWWNWWWWWCCCCCCCCCCCCCCDDDDDDUUUUUUUHHHHHHHHJJJJJRXXXXXXXXXXOXXXXOOOOFFFTTTTTTTTTOGGGGGGGGGAAAAAAAAA",
	"DDDDDDDDDDLRLLLLLLLWLWWWWNNGGGGGGGHGJJJWWWWWWWWWWCCCCCCCCCCCCCDDDDDDDDDUUUUUJJHHHHJJJMJJJJXXXXXXXXXXXXXXXOOOOFFOOTTTTTTTTOOGGGGGGGGGAAAGAGAA",
	"DDDDDDDDDDLRLLLLLLWWWWWWNNNNNNGGGGHGJJGMMWWWWWWWWWCCCCCCCCCCCCDDDDDDDDDVVUVUUJHHJJJJJJJJJXXXXXXXXXXXXXXXXOOOOOOOTTTTTGTGLGGGGGGGGGCGGAGGGGTA",
	"DDDADDDDDDNLLLLLLLLLWWWWNNNNNGGGGGGGGGGMMMWWWWWWWWWCCCCCCCCCCCDDDDDDDDVVVVVUUJJJJJJJJGJJXXXXXXXXXXXXXXXXXOOOOOOOTTTTTGGGGGGGGGGGGGGGGAAVATTT",
	"DAAADDDNNNNNLLLLLLLLLWWWNEENNGGGGGGGGGGMMMMWWWWWWWWWCCCCCCCCCCCDDDDDDDDVVVVVJJJJJJJJJJJJXXXXXXXXXXXXXXXXXOOOOOOOOTTGGGGGGGGGGGGGGGGPGAAAAATT",
	"AAAAADDNENNNNLLLLLNNNWNNEEENNNNGGGGGGGSMWWWWWWWWWWWWCCCCCCCCCCCCCDDDDDDVVVVVJJJJJJJJJJJJJXXXXXXXXXXXXNNXOOOOOOOOOTTTTGGGGGGGGGGGGGGGGAAAAAAT",
	"AAAANDNNENNNNNNNNLNNNNNNEEEEENNEGGSOGGSSSWWWWWWWWWWWCCCSSCCBCOCCCDDDDDDBVVVVJJJJJJJJJJJJJJXXXXXOXXXOZOOOOOOOOOOOOTTTTTTGGGGGGGGGGGGGGGLLTATT",
	"AAAANNNNNNNNNNNNNNNNNNNNEEEEEEEEEGSSSSSSSWWWWWWWWCWWCCCSIIIIIIIIIIDBDDDBVBBVJJJJJJJJJJJJJXXJJXXOOOOOZOOOOOOOOOOOOTYTTTGGGGGGGGGGGGGMGGLLTTTT",
	"NNSNNNNNNNNNUNNNNNNNNNNNNEEEEEEEEEKSSSSSSSSWWWWWWCCCCCCCIIIIIIIIIIOBDDDBBBBWWWJJJJJJJJJJJXJJJXXKOOOOOOOOOOOOOOOOFYYYYYGGGGAGGGGGGGDDGLLLTTTT",
	"NNNNNNNNONNUUNNNNNNNNNEEEEEEEEEEEEEESISSSSWWEEWCCCCCCCCCIIIIIIIIIIBBBBBBBBWWWWJJJJJJJJJJJJJJJXOOOOOOOOOOOOOOOOOYYYYYYYYQGAAAGGGGGDDDDLLLLTLL",
	"NNNNNNNNNTNXUNNNNNNNNEEEEEEEEEEEEEEIRISSSSSWEEWWCCCAIIIIIIIIIIIIIIOBBBBWWBBWAWWWWWJJJRJJJJJJJJJOOOOOOOODOOOOOOOYYYYYYYYYYYAAAAGGEEDDDLLLLTLL",
	"NNNNNNNNNNXXUUUNNNNNNNEEEEEEEEEEEEEIIIISPEEWEEECCCAAIIIIIIIIIIIIIIBBWBWWWWWWWWWWWWWWWRRRJJJJJOOOOOOOOOODDOOOBYOYYYYYYYYYOOOAAAGAADDLLLLLLLLL",
	"NNNNNNNNUUUUUUUNNNNNNEEEEEEEEEEEEEEIIIIIIIEEEEEECEAAIIIIIIIIIIIIIINBWWGGGGGGGWWWWWGGRRRRRJOJJOOOOOOOOOOODDDDYYYYYYYYYYOOOOOAAAAAALDLLLLLLLNN",
	"NNNNNNNNNUUUUUUUNNNNNEEEEEEEEEEEEEIIIIIIIIEEEEEEEIIIIIIIIIIIIIIIIINNNWGGGGGGGGGGGWRRRRRRROOOOOOOOOOOOOOODDDDYYYYYYYYYYOOTAAAAAAAALLLLLLLLLNN",
	"NNNNNNNNUUUTUMMNNNNEEWWEEEEEEEEEEEIIIIIIIEEEEEEEEIIIIIIIIIIIIIAANNNNNWGGGGGGGGGGGRRRRRRRRROOOOOOOOOOOOOODDDDDDYYWYYYYYYAAAAAAAAAALLLLLLLLLNN",
	"NNNNNNNNNTTTUJNNNEEEEWEEEEEEEEEEEEIIIIIIEEEEEEEEEIIIIIIIIIIIIIANNNNNNWGGGGGGGGGGGRRRRRRRRRDDOOOOOOOOOOOODDDDDDYYYYYYYYYAAAAAAAAAALLLLLLLLLLN",
	"NNNNNNNNNTTJJJOJNRREEEEEEEEEEEEEEIIIIIIIEEEEEEEEEIIIIIIIIIIIIINNNNNNNWGGGGGGGGGGGRRRRRRRRRRROOOOOOOOOOOOODDDDDDDDDYYYYYAAAAAAAAAAALLLLLLLNNN",
	"NNNNNNNJTTTTTJJJRRREEEEEEEYYENNNIIIIIIEEEEEEEEEEEIIIIIIIIIIAAAANNNNGGGGGGGGGGGGGGRRRRRRRRRRROOUOOOOOOOOODDDDDDDDDDDYYYEEAAAAAAAAAALLLLLLLNNN",
	"NNNJJNJJJTTTTJJJJJJEEEEEEEEEEEIIIIIIIIIIIEEEEEEEEIIIIIIIIIIAAAAANNNGGGGGGGGGGGGGGGGGRRRRRRRRROOOOOOOOOODDDXDDDXXXDDDYYDEAAAAAAAAAAAAALLLLNNN",
	"NNJJJLJJJJTTJJJJJJJJEEEEEEEEEEIIIIIIIIIEIIEEEEEEFIIIIIIIIIIAAAAANNNGGGGGGGGGGGGGGGGGRRRRRRRRGXOOXXOOOOXXXXXXXXXXDDDDDDDEAAAAAAAAAAANNNLLLLNN",
	"NNJJJJJJJFJTJJJJJJJJEEEEEEEEEEEIIIIIIIEEEEEEEEEEFIIIIIIIIIIAAAAAYNNGGGGGGGGGGGGGGGGGRRRRRORRXXXOXXXOOOXXXXXXXXXXDDDDDDDEAAAAAAAAANNNNNNLLLNN",
	"JJJJJJJJJJJJJJJJJJJJSSSSSSSSEEEEEIIIIIIEEEEEEEEEFIIIIIIIIIIAAAAAALNGGGGGGGGGGGGGGGGGRRRRROOROQXXXXXXXXXXXXXXXXXXXDDDDDDDPAPAAAAAAAANNNNLNNNN",
	"EEJJJJJJJJJJJJJJJJJJSSSSSSSSEEEEEIIIIIEEENEEEEEFFFFFUWWUUAAAAAALLLHGGGGGGGGGGGGGGGGGSRRRROOOOQQXXXXXXXXXXXXXXXSXXDDDDDDDPPPAAAUAAAANNNNNNNNN",
	"EEJJJJJJJJJJJJJJJJJJSSSSSSSSEEEEEINIIIEENNEEEEEEFFFFFFWAAAAAAAAALLLGGGGGGGGGGGGGGGGGRRRRROOOOQQXQXXXXXXXXXXXXXSSDDDDDDDPPPPPPPAAAANNNNNNNNNN",
	"ZZZZZZZZWWJJJJJJJJJJSSSSSSSSEEEEEENIINNNNNNEEFFFFFFFFFFFACAAAAIHHLHHHHHHHHGGGGGGGGGGRRRROOOOOQQQQKXXXXXXXXEGGGGGGDDDDDPPPPPPPPPPPAPNKKKKNKNN",
	"ZZZZZZZZZZWJJJJJJJJJSSSSSSSSEEEEEENNINNNNNNNNYFFFFFFFFFFACAAAAIHHHHHHHHHGGGGGGGGGGGGOOOOOOOOOQQQQXXXXXXXXXEGGGGGGDPPDDDPPPPPPPPPPPPPPKKKKKKK",
	"ZZZZZZZZZZWJJJJJJJJJSSSSSSSSEEEEEEENNNNNNNNNYYYYFFYFFFFAACCAAAANHHHHHHHHGGGGGGGGGGGGOOOOOOOOOOXTTXXXXXXXXGGGGGGGGPPPPPPPPPPPPPGPPGPKKKKKKKKK",
	"HHHHHJJZZZWJJJQJJJJJSSSSSSSSEEEEENNNNNNINNNNNYJYYYYYFFFAACCAAANNHHHHHHHHGGGSSSSSSSOOOOOOOOOOOOXXXXXXXXXXXXHGGGGGGPPVVPPPPPPPPGGGGGGKKKKKKKKK",
	"HHHHHHHZZZWQQQQQQQJQSSSSSSSSEEEEENNNNNIINNNYYYYYYYYYYFFAAAAAAAAAHHHHHHHHGGGSEPPPPPSOOOOOOOOOOOXXXXXXXXXXXHHGGGGGGVVVVPPPPPPPPGGGGGGGKKKKKKKK",
	"HHHHHHHZZZWQQQQQQCQQSSSSSSSSEEEEENNNNIIIINNYYYYYYYYYYAAAAAAAAAAAHHHHHHHHGGGEEPPPPPSSCOOOOOOOOOOXXXXXXXXXXHHGGGGGVUVVVVPPPPPOPGGGGGGGGKKKKKKK",
	"HHHHHHHZZZQQQQQQQQQQQUUUUBEEEBIIIIINIIIIIINYYYYYYYYYYAAAAAAAAAAAHHHHHHHHHHSEEPPPPPSCCCCCCCOOOOOXXXXXXXXXXHHGGGGGVVVVVPPPOOPOORGQGGGGGGKEEKKK",
	"HHHHHHHZZZQQBBQQQQBQBUUUUBEBBBBIIIINIIIIIIYYYYYYYYYYAAAAAAAAAAAAHHHHHHHHHHHEEPPPPPECCCCCCCCOCCXXXXXXXXXXXXXJJJVVVVVVVVVOOOOORRGQGGGGSEEEEEKK",
	"HHHHHHHZZZBBBBQQQBBBBBUUBBBCCBBBIIIIIIIIIIIYYYYYYYYYTHHHHAAAAAAAAAHHHHHHHHHEPPPPPPEECCCCCCCCCCXXXXXXXXXXXXXJVVVVVVVVVVOOOOOOORRQGGGEEEEVEEEK",
	"HHHHHHHZZZBBBBBBQBBBBBBBBBBBBBBBBIIIIIIIIIIIYYYYYYYYHHHHHHAAAAAAAAHWHHBHHHHEPPPPPPECCCCCCCCCCCMXKXXXXXXXXXXJVVVVVVVVVVVSOOOOOOGGGGEEEEEEEEKK",
	"HHHHHHBBBBBBBBBBBBBBBBBBBBBBBBBBBIIIIIIIIIIIYYYYYYYYYHHHHHAAFFFFFTTHHHHHHHHEPPPPPPEECCCCCCCCCMMXXXXXXXXXXXJJVVVVVVVVVVOOOOOOOOOKKGKKKEEEEEKK",
	"HHHHHHTBBBBBBBBBBBBBBBBBBBBBBBBBBIIIIIIIIIIQQHHHHHHYYYHHHHHHFFFFTTTHHEEEEEEEEPPPPPEECCCCCCCCCXXXXXXXXXXXXXVVVVVVVVVVVVVOOOOOOOOOKKKKKEEEEKKK",
	"HHHHBHBBBBBBBBBBBBBBBBBBBBBBBBBBBBIIIIIIIIIQQQHHHHHHHHHHHHFHFFFFTTTTHEEEEEEEEPPPPPEECCCCCCCCXXXXXXXXJXXXXWWVVVVVVVVVVVVOKKOOOOOOKKKKKEKEKKKK",
	"HHHRBBBBBBBBBBBBBBBBOOOBBBBBBBBBBBBIIIIIIIIIQHHHHHHHHHHHHFFFFFFFFFFTEEEEEEEEEPPPPPFCCCCCCCCXXXXXXXXXXXXXWWWWVVVVVVVVVVVVKKOKKKKKKKEEKEKKKKKK",
	"HHHHIBBBBBEBBBBBBBOOOOOBBOOTBBBBBBBWWWIIIIIIIQHHHHHHHHHHHHFFFFFFFFFTEEEEEEEEEPPPPPFCCCCCCCCXXXXXXXXXXXWWWWWWWWVVVVVVVVVVKKOKKKKKKKEEEEKKKKKK",
	"RRRRBBLLBBEBBBBBBOOOOOOOOOOOBBBBBBBBWWWIIIIQQQQHQQHHHHHHFFFFFFFFFFFEEEEEEEEEEPPPPPFFCCICCCCXXXXXXXXXXXXWWWWWWWWWVVVVVVVKKKKKKKAKKKEEEEKKKKKK",
	"RRRRRBBLRREBBBBBBOOOOOOOOOOBBBBBBBBBWWWIIIIQQQQQQQHHHHHHFFFFFFFFFFKEEEEEEEEEEEFFFFFFIIICCCCCXXXXXXXXXXXWWWWWWWWWVVQQVVVVKKKKAKAKKKEEEKKKKKKK",
	"RRRRRBRRRRRBOBOBOOOOOOOOOOOBBBBBBBBBBWWIIIQQQQQQQQHMHHHLFFFFFFFFFFFFEEEEEEEEEFFFFFFFFIIICTCCXYXXXXXXXXXXWWWWWWWWVVQQQQQJAAKAAAAKKKEEEEKKKKKK",
	"RRRRRRRRRRRROOOOOOOOOOOOOOBBBBBBBUBBBWIIIQQQQQQQQQQQFHHHFFFFFFFFFFFFEEEEVEEEEFFFFFFFFHHHTTCAXYYXXXXXXWWWWWWWWWWWWQQQQQAAAAAAAAAAAAEECEKKKCCC",
	"RRRRRRRRROOROUOOOOOOOOOOOOOBBBBBBBBBBBIQBQQQQQQQQQQQFFHFFFFFFFFFFFFFFEEEVEEVVVFFFFFFHHHHTTCAYEYYYYYXWWWWWWWWWWWWQQQQQQAAAAAAAAAAMACCCCKKCCCC",
	"RRRRRRRRROOOOUUOOOOOOOOOHOHHBBBBBBBBBBBBBQQQQQQQQQQQFFFFFFFFFPFFFUUFFFEEVEVVVVVVFFFFFHHHTTTYYYYYYNYYYYWWWWWWWWWWWQQQQQAAAAAAAAAAAAACCCCCCCCC",
	"RRRRRRRRROOOUUUUOOOOOOOHHHHHBBBBBBBBBBBBBQQQQQQQQQQFFFPFFPFFFPPPUUUUUFUUVVVVVVVVFFFFFHHTTTYYYYYYYYYYYYWWWWWWWWWWWHQQQQQAAAAAAAAAAAAACCCCCCCC",
	"RRRRRRRRRROOOUUUUOOOOOOTTTHBBBBBBBBBBBBMQQQQQQQQQQQFFFPPPPZPPPPPUUUUUUUUVVVVVVVVVVFHHHHHTTYYYYYYYYYYYYWWWWWWWWWWWHHQQQQAAAAAAAAAAAAACCCCCCCC",
	"RRRRRRRRRROOUUUUUUUTTOOOTTBBHBBBBZBBBZZQQQQQQQQQQQQFFPPPPPPPPPPPUUUUUUUUUVVVVVVVVHHHHHHHHYYYYYYYYYYYTEWWWWWWWWWVJJHQQQQAAATAAAAAAAAAZCCCCCCC",
	"RRRRRRRRRROOUUUUUIUUTTTOTTTBBBBZZZZZZZZZHQQQQQKKKKQFFPPPPPPPPPPPUUUUUUVVVVVVVVVHHHHHHHHHHYYYYYYYYYYYTEEEWWWWWJJJJJJKKQQQQQAAAAAAAAAACCCCCCCC",
	"RRRRRRRRRROOOUUUUUTTTTTTTTTBBBBZZZZZZZZHHHXXXXXKKXXXPPPPPPPPPPPPUUUUUUVVVVVVGVVVVHHHHHHHHYYYYYYYYYYYEEEEWWWJWJJJJJKKKKQQQDDDAAAAAAAACACCCCCC",
	"GRRRRRRRRROOUUUUUKDDTTTTTTTBBBZZZZZZZZZZHHXXXXXKKXXXPPPPPPPPPPPUUUUUUUVVGGVGGVHHHHHHHHHHHTTTYYYYYYAYEEEWWWWJJJJJJJKKKKQQQDDDDAAAAAAAAAACCCCC",
	"GGGRRBBRROOOOUUUUKDDTDTTTTTTBBBZZZZZZZZZZGXXXXXXXXXXPPPPPPPPPPPZUUUUUUUVVGVGGGHHHHHHHHHHHTTTYYYYYYYYEEEEWWWJJJZZZZKKKKQQQDDDDAAAAAAAAAAACCCC",
	"GGGGGGBRROOOOOOODDDDDDTTTTTTTTTZZZZZZZZGGGGGSXXXXXXXXXXPPPPPPPPUUUUUUUUGGGGGGHHHHHHHHHHHHTTTTYYYYLYEEEEEEEWWJJZZZZQQQQQQDDDDDAAAAAAAAAAACCCT",
	"GGGGGBBOOOOODDDDDDDDDDTTTTTTTTTZZZZZZZGGGGGGSXXXXXXXXXXPPPPPPPPUUUUUUUUUGGGGGWHHHHHHHHHHHHTTTEYYYYYYEEEVEJJJJJZZZZQQQQNQPDDDDAAAAAAAAAAAAATT",
	"GGBBBBBOOOOODDDDDDDDDDDTTTTTTTTVZZOZZGGGGGGGSXXXXXXXXXXPPPPPPPPPPUUUUUUUUGGGGGHHHHHHHHHHHHTTEEEEYYYEEEETJJJJJJZZZZQQQQNNPPDDDAAAAAAAAAAAAAAA",
	"GGBBBBOOOODODDDDDDDDDDDDTTTTTTTVZZZZZGGGGGSSSSSSXXXXXXXXPPPPPPPPPUUPUUUURKGSSSHHHHHHHHHHTTEEEEEEYYEEEERTTJJJZZZZZZJJJJJJPPDDDADDAAAAAAAAAAAA",
	"GBBBBBBOOODDDDDDDDDDDDDDTTTTTTTTAAAGGGGGGGSSSSSXXXXXXXXXPPPPPPPPPPPPRUVVRRSSSSSHSSSHHHHTTTEEEEEEEEEEETRTTTTGZZZZZZZZZZZZZPDDDDDAAAAAOAAAAAAL",
	"GBBBBBBHOHDDDDDDDDDDDDDDTTTTTTTTAGAGGGGGGGGASSSXXXXXXXXXXXPPPPPPPPPRRVVRRRSSSSSSSSHHHHHTTTTEEEEEEEEETTTETTTTZZZZZZZZZZZZZPDDDOOOAAAOOAAAAAAA",
	"GBBEHHOHHHDDDDDDDDDDDDDTTTTTTTAAAGWGGGGGGGGASSSSXXXXXXXXXPPPPPPRRRRRRRRRRRSSSSSSSSHHMMSSTTTTEEEEEEEETTTETTTTZZZZZZZZZZZZZOOODOOOAAAAAAAAAASA",
	"GBEEEHHHHHDDDDDDDDDDDDDDDTTTTTAAAGGGGGGGGGGAASXXXXXXXXXXPPPPRRPRRRRRRRRRRRRRSSSSSSSSSMSTTTEEEEEEEEETTGTTTTTTZZZZZZZZZZZZZOGOOOOOOOSOOONASSSS",
	"GBEHHHHHHHHDDDDDDDDDDDDDBTTTAAAAAGGGGGGGAAAAXXXXXXXXXXXGPPPPRRRRRRRRRRRRRRSSSSVVSSSSSSSSSSWWWWEEEEETEGTTTTTTZZZZZZZZZZZZZOGOOOOOOOOOOOOJJSSS",
	"GHHHHHHHHHDDDDDDDMDDDDDDBTTAAAAAAAGGAGGAAAAAXXXXXXXXXXXGPPPPTRRRRRRRRRRRRRSSSVVGSSSSSSSSASWWWWEEEEEEETTTNTTTZZZZZZZZZZZZZOOOOOOOOOOOOOJJSSSJ",
	"GHHHHHHHHHHDDDDDDDDDQQQDQAAAAAAAAAAGAGGAAAAAXXXXXKXXXXXXWWWPRRRRRRRRRRRRRRSVVVVGSSSSSSSSSQJJEEEEEEEEETNTNTTTZZZZZZZZZZZZZOOOOOOOOOOOOJJJJJSJ",
	"GHGHHHHHHHHDDDDDDQQQQQQQQQQAAAAAAAAAAAAAAAAAAAAXXXXXGRRRRRRRVRRRRRRRRRRRRRGVVVVVVSVSSSSSSJJJEEEEEEEOLNNNTTTTZZZZZZZZZZZZZXOOOOOOOOOOONJJJJJJ",
	"GGGHHHHHFFFFDBBQQQQQQQQQQQQAAAAAAAAAAAAAAAAAAAAXNNNNGRRRRRRRVRRRWRRRRRRRRRRVVVVVVVVVVSSSJJJJJJJWWEELLNNNNTTTZZZZZZZZZZZZZXOXOOOOOOOOOOOJJJJJ",
	"GGGHHHHHFFFFFBBBQQQQQQQQQQQAAAAAASAAAAAAAAACCCXXGNGGGGGGRRRRRRURRRRRRRRRRSRRQVVVVVVVVJJJJJJJJJJJWWLLLLNNNNNTTTTTTZZZZZZXXXXXXOOOOOOOOOOIJJJI",
	"GGGGHHHHFFFFFBGGQQQQQQQQQQQAAAAAASSSSCCCCACCCUUXGGGGGGGRRRRRRRURRRRRRRRRRSSSQVVVVVVVVVJJJJJJJJJJJWLLLLLNNNTTTTTTVZZZZZZXXXXXXOOOOOOOOOOIIIII",
	"GGGEFFFHFFFFFFFGBGGGGGGGGQQQAASSSSSSSCCCCACCCUUUGGGGGGGGGRRGUUURTRRRTRRRRSSQQQVVVVVVRRRJJJJJJJJJWWLLLLLLNLLTTTTTTZZZZZZXXXXXXOOOOOOOOOIIIIII",
	"GGGGPFFFFFFFNFFGGGGGGGGGGAAQQAASSSSSSCCCCCCCCUUUUGGUGGGGGGGGUUURTTRRTRRSSSQQQQVVVVVVRRRRJJJJJJJJWWWWLLLLLLLLGTTTAZZZZZZIXXXXXOOOOOOIXXIIIIIK",
	"GGGGPPPFFFLFFFTGGGGGGGGGGNAQAASSSSSSZZCCCCCCCCUUUUGUGGGGGGGGGTTTTTTTTRRRSSQQQVVVVVVVRRRRJJJJJJKWWWWWLLLLLLLLLTTTAZZZZZZAXXXXXXXOOOOIXIIIIIII",
	"PGGPPPPFFFLLGGGGGGGGGGGGQAAAASSSSSSSSSNNCCCCCCUUUUUUUGGGGGGGGTTTTTTTTTRTTTMQQVVVVVVVRRRRJJJJJMKKKWLLLLLLLLLLLAAAAZZZZZZAXXXXXXXXXXIIIIIIIIII",
	"PPGPPPPPFLLLLLGGGGGGGGGGCCCCASSSSSSSSSNCCCCECCUUUUUUGGGGGGGGGTTTTTTTTTTTTTTVVVVVVVVRRRRRJRJJJJKKKKLLLLLLLLLAAAAAAZZZZZZAXXXXXXXXXXIIIIIIIIII",
	"PPPPPPPPFLLLLLSSGGGGGGGWCCCCCSSSSSSSSSNNCNCCCCCUUUGGGGGGGGGGGGTTTTTTTTTTTTTTVVVVVVRRRRRRRJJJRKKKKKLLLLLLLLLAAAAAAZZZZZZAXXXXXXXXXIIIIIIIIIII",
	"PPPPPPPPPPPPLPPSWWGGWWWWCCCCSSVSSSUUUNNNNNNNCCCCCGGCGGGGGGGGGGTJTTTTTTTTTTTTCCVVRRRRRTTRRRJJJKKKKKLLLLLLLLLAAAAAAZZZZZZAXXXKXXXXXXIIIIIIIIII",
	"PPPVVPPVPPPPPPPPPWGGGGWWCZCSSSSSSSUUUUUNNNNNCNNNNGGGGGGGGGGGJTTJJJTTTTTTTTTTTCCVRRRTTTTTTTOOJKKKKKKLLLLLLLAAAAAJJJJJJTJXXXXKKKKXIIIIIIIIIIII",
	"PPPVVVVVPPPPPPPPPWGWWWWZZZZGGSSSUUUUUUUUNNNNNRRRNNGGGGGGGGGGJJJJJJJJJJTTTTTTTTMMRRTTTTTTTTOKJKKKKKKKKKLLLAAAAAAJJJJJJJJJXXXKKKKHINNIIIIIIIII",
	"PPPVVVVVVVVPPPPPPWWWWIIIGGGGGSSUUUUUUUUUUNTTNTRRRGGGGAGGGGJJJJJJJJJJJTTTTMMMMMMMRRRTTTTTTTKKKKKKKKKKKKKLLLAAJJAJJJJJJJJJJJKKKKKKNNNIIIIIIIII",
	"SPPVVVVVVVPPPPPPPWWIIIIIGGGGGGGGUUUUUUUUUNTTTTCTRGRGGAGZJGJJJJJJJJJJJJTTMMMMMMMMRRRRTTTTTTTKKKKKKKKKKKKLLAAAJAAJJJJJJJJJJJKKKKKKKNIIIIIIIICC",
	"SPSVVVVVVVPPPPPPRWWIEIIIIGGGGGGGUUUUUUUUUTTTTTTTRRRRRJGJJJJCJJJCCJCJJJJHMMMMMMMRRRRRTTTTTTTJKKKKKKKKKKKKLAAJJJJJJJJJJJJJJKKKKQKNNNIIIIIIICCC",
	"SSSSSSVVVVPPPPPPPPWIIIIIGGGGGGGFUUUUUUUTUTTTTTTTTRRRRJJJJJJCCJCCCCCCCCJJJBMMMMMRRRRRTTTTTTTJKKKKKKKKKKKAAAAJJJJJJJJJJJJJJKKKKKKNNNIIIIPIIICC",
	"SSSSSVVVVPPPPPPPPPPIIIIIGIGGFFFFFFEUUUBBBBBBBBTTRRRRRRRRJJJCCCCCCCCCCJJJZZMMZZVZZZZTTTTTTTTJKKJKKKKKGKKAAJJJJJJJJJJJJJJJKKKKKKKKKNIIIIPIICCC",
	"SSSSSVVVVPPMPLLPPPLIIIIIIIGGFFFFFFTTTTBBBBBBBBTRRRRRRRRRJJCCCCCCCCCCCCCJZZZZZZZZZWWTTTTTTWJJJJJKKKKKGKKKGGGJJQJQJJJJJJJDKKKKKKKKKNIIIYCCCCCC",
	"SSSSSVVVPPMMMLLLPPPIIIIIIXXFFFFFFFTTTTBBBBBBBBTTXXRRRRRCCCCCCCCCCCCCCCJZZZZZZZZZZZWWWWTWWWWJJJJJJKKKGGKKGGGJGQQQQBNJJJJKKKKKKKKKKKIIYYYYCCCC",
	"SSSSSVBMMMMMMLLLPCCIIIIIIXXXFFFFFFTTTTBBBBBBBBTXXXXXRRRRCCCCCCCCCCCCCCZZZZZZZZZZZZZZWWWWWNNJJJJJKKKKXGGGGGGGGQQQBBBBBBBKKKKKKKKKKKKKYYYYYCCC",
	"SSSSSVVMMOMMMMMLMCCIIIIIIXSFFFFFFTTTTTBBBBBBBBXXXXXXXTRRRBZCCCCCCCCCCZZZZZZZZZZZZZZHPPPWWNNJJJJJNKNNGGGGGGGGQQQQBBBBBBBBKKKKKKKKKKKDAYYYYAAK",
	"SSSSSVCMMMZZZZZZZZCICXIXXXXXXFFFFTTTTTBBBBBBBBXXXXTXTTTRRBBCCCCCCCCCCCCCZZZZZZZZZZZHPPPWNNNJBJJNNNNNGGGGGGGGGQQQBBBBBBBBBKKKKKKKKKKAAAAYYAAK",
	"SSSFFFMMMMZZZZZZZZCCCXXXXXXXXFFFFTTJTTBBBBBBBBXXXTTTTTBBBBCCCCCCCCCCCCCCZZZZZZZPPPPPPYPPPNNNNJJNNNNNGGGGGGGGGGQQQBBBBBBBBBBBBCBBAAAAAAAYYAAK",
	"SSSFFFFMMMZZZZZZZZCCCZZZZZZZZZFFFFTTYTYTTXXXXXXXTTTTTTTBBBBCCCCCCCCCCCCCZZNNNNNNNNNPPPPPNNNNNJJJNNNGFGGGGGGGGGGQBBBBBBBBBBBBBBBZZAAAAAAAAAAA",
	"NNSSMMMMMMZZZZZZZZZZZZZZZZZZZZFFFFUUYYYTTXXXXXXXTTTTTTTBBBBBCCCCCCCCCCCCZZNNNNNNNNNNNNNNPPNNNNNNNNNGGGGGGGCGGGGQBBBBBBBBBBBBBBBZZQQAAAAAAATT",
	"NNNNBMMMMMZZZZZZZZZZZZZZZZZZZZUUUFUUUUOTTXOOOXXTTTTTTTBBBBBCCCCCCCCCCCZZZZNNNNNNNNNNNNNNPNNNNNNNNNNGGGGGGCCCGGGQQLBBBBBBBBBBBBBZZQQAXAAAAAAA",
	"NNNBBMXMMMZZZZZZZZZZZZCCCCUUUUUUUEUUUUOOOOOOXXXTTTTTTTTGBBBBFFCCSSSSCCUZZZNNNNNNNNNNNNNNPNNNNNNNNNNNGGCRGGCGGGQQQLLBBBBBBBBBBBZZZQQQAAAAAAGG",
	"BBNNBBXXMMDMMZZZZZZZZZCCCCUUUUUUUUUUUUOOOOOOTTTTTTTTTBBBBBBBBFCCSSSSSCZZZZNNNNNNNNNNNNNNEEENNNNNNNNNNNCCCCCCCLLLLLLLBBBBBBBBBBZZZQQQQQQAALLG",
	"BBBBBBXXXMDMMZZZZZZZZZCCCCUUUUUUUUUUUOOOOOOOTTTTTTTTTBTBTTTFFFFFVSSSSSZZZZNNNNNNNNNNNNNNCEENNEEEENNNNCCCCCCCCLLLLLLLLLBBBBBBBBZZZQQQQQQQQLLG",
	"BBBBBBBDDDDDDZZZZZZZZZCCCCUUUUUUUUUUUOOOOOOOTTTTTTTTTTTTTTTTFFFFVSSSSSSSQQNNNNNNNNNNNNNNCEEEDEEENNNZNNCCCCCCCCLLLLLLLLBBBBBZZZZZZQQQQQQLQLLL",
	"BBBBBDDDODDDIZZZZZZZZZCCCCCUUUUUUUUUUOOOOOOTTTTTTTTTTTTTTTFFFFFFVVVVVQQQQQNNNQCNNNNNNNNNEEEEEEEENNNZZNCCCCCCCCCCLLLLLLBBBBBZZZZZUUQQQQQLLLLL",
	"BBBBBBBDDDTSISSZZZZZZCCCCCUUUUUUUUUUUUOOOOOTTTTTTTTTWTWTTTFFFFFFVVVVVGQQQQNNNQQNNNNNNNNNEEEEEEEENNZZZZCCCCCCCCCCLLLLLLLBBBBZUZUUUUUQQQNLLLLL",
	"BBBBBBBDDDDSSSSZZZZZZCCCCCUUUUUUUUUUUUOOOOOMMMMTTTTSWWWWTTFFFFFFFVVVVVQQQQNNNQQNNNNNNNNNEEEEEEEEZZZZCCCCCCCCCCCCLLLLLLUUBUUUUUUUUUUFQQQQLLLL",
	"BBBBBBBBDDDSSSCZZZZZZCCCCCVRRUUUUUUUUMMMOOOMMMMTTTWSWWFFFFFFFFFFFVVVVVQQQQNNNQQQQCCEEEEEEEEEEEEEEZZZCCCCCCCCCCCCCLLLLLUUUUUUUUUUUUFFQFFLLLOO",
	"YBBBBBBBYDYSSSSZZZCCCCCCCRRRRRUUUUUUUMMMMMMMMMMMMFWWWWFWWFWFWWFFVVVVVVVQQQQQQQQQQQCCCCEEEEEEEEEEEZZZCCCCCCCCCCCCCLLLLLUUUUUUUUUUUUFFFFFFFZZO",
	"YYBBBBBBYYYYSSSZZZRCACCCCRRRRRUUUUUUUMMMMMMMMMMMMFWWWWWWWWWWWWFFFVVVVVVQQQQQQQQQQQQCCCCCCCEEEEEEEZZZCCVCCCCCCCCCCCLLUUCUUUUUUUUUUUFFFFFFFZZZ",
	"YYBBBBYBYYYSSSSSSRRCACCRRRRRRRUUUUUUMMMMMMMMMMMMMFFFWWWWWWWWWWFFVVVVVVVMQQQQQQQQQQQCCCCCCCEEEEEEEZZZCZVVVCCVVCCVVOOLUUCUUUUUUUUUUUFFFFFFFZZZ",
	"YYYBYYYYYYYYSSSRSRRRRRRRRRRRRRUWZZZMMMMMMMMMMMMMMFFFWWWWWWWWWFFFVVVRRRMMQQQQQQQQQQCCCDCCDCEEEEEZZZZZZZZVVVVEVVVVVCCCUCCCUUUUUUUUFFFFZFFFZZZZ",
	"YYYYYYSSYYYYSSRRRRRRRRRRJRRJRRRRRZZMMMMMMMMMMMMMMFFFFWWWWWWWWWFFFRRRRRRRGQQQQQQQQQQCCDDDDDDEEEEZZZZZZZVVVVVVVVVVCCCCUCCUUUUUUUUUFFFFZZZFZZZZ",
	"YYYSSWSSYYYYSSRRRRRRRRJJJPJJRRZZZZZZZZMMMMMMMMMQMFFFFWWWWWWWWFFFRRRRRREEQQQQQQQQQQQDDDDDDDDDEZZZZZZZZZVVVVVVVVVICCCCUCCCUUUUUUBBBFZZZZZZZZZZ",
	"YYYYSSSSSSSSSSRRRRRRRRDJJJJJJZZZZZZZZZMMMMMMMMMMMMMMFFFWWWWWWFFFRRRRRRREQQQQPPQQQQQQDDDDDDDDZZZZZZZZZZZVVVVVVVVIICCCCCCSUUUUUUUUZZZZZZZZZZZZ",
	"YYYYSSSSSSSSSSSRRRWRRRDJJJJJJZZZZZZZZZZZZMMMMMMKOFFFFFFFWWWWFFRRRRRRRRPPPQQQPPPQQQQQDDDDDDDHZZZZZZZZZVVVVVVVVIIIICSSSUSSSSUSUUUZZZZZZZZZZZZZ",
	"YYYYSSSSSCCQQQSSSSWWRYJJJJJJHZZZZZZZZZZZZMMMMMMKOFFFFFFFFWWWFRRRRRRRRRRRPPQPPPPPQQDDDDDDDDHHHZZZZZZZZVVVVVVVVVVIISSSSSSSSSSSSZRRZZZZZZZZZZZZ",
	"YYYYSSSSSQCQQQSSZZZZJJJJJJJJJSZZZZZZZZZZZMMMMQQOOOOOFFFFFFFFRRRRRRRRRRRRPPPPPPPPPQDDDDDDDDDDHWMMZZZZZVVVVVVVVVIIISSSSSSSSSSSSZZZZZZZZZZZZZZZ",
	"YYYYYSSSSQQQQQZZZZZZMJJCJJJJJJJZZZZZZZZZZMMRMQQQQOOOOOOFFFFRRRRRRRRRRRRRPPPPPPPPTWDDDWNNDWWWWWMMZZZZZVVVVVVVVVIIIISSSSSSSSSSSSJZZZZZZZZZZZZZ",
	"YYYYYYSYSQQQQQQZZZZZZZCCZJJJJZZZZZZZZZZZZZZRROOOOOOOOOFFFRRRRRRRRRRRRRRRPPPPPPPTTWWWWWWWWWWWWMMMMMZZSHHHVVVVIIIIIIIISSSSSSSSSSSZZZZZZZZZZZZZ",
	"YYYYYYYYYYQQQQQQZZZZZZZZZBJJJZZZZZZZZZZZAZZZROODOOOOOOOOFFRRRRRRRRRRRPRRRRPPPPPTWYWWWWWWWWWWWWWMMMMZZHHHVHHVIIIIIIISSSSSSSSSHHHSEZZZZZZZZZZZ",
	"YYYYYYQQQQQQQQQQQZZZZDZZDDDCZZZZZZZZZZZZAZRRROOOOOOOOOOOFFFFRRRRRRRRRPRPPPPPPPTTWWWWWWWWWWWWWWEEEEMMZZHHHHHHIIIIIISSSSSSSSSSHSSSEZZZZZEEZZZZ",
	"YYYYYYYQQQQQQQQZZZZZDDDDDDDDZZZZZZZZZZZZZZROROOOOOOOOOOSFFFFFFRRRRRPPPPPPPPPPTTWWWWWWWWWWWWWWWWEEEMMZHHHHHHHIIIIIISSSSSSSSSSSSSSEEEEZEEEZZZZ",
	"YYYYYYYYYQQMQQYRRZZDDDDDDDDDZZZZZZZZRRRRRRROOOOOOOOOOOOSFFFFFFPRRRRRPPPPPPPPPTWWWWWWWWWWWWWWWWWEEMMMMHHHHHHIIIIIIISSSSSSSSSSSSSSEEEZZEEEEEZE",
	"YYYYYYYYYYYQQQYRRZZDDDDDDDDDMZZZZOZRRRRRROOOOOOOOOOOOOOFFFFFFPPPPRRPPPPPPPPPPTWWWWWWWWWWWWWWWMMEMMHHHHHHHHHIIIIIISSSSSSSSSSSSSSSEEEEEEEEEEEE",
	"YYYYYYYYYYYYYYYYYYYDDDDDDDDDMZZZZZRRRRRRROOOOOOOOOOOOOEEEFFFFPPPPPPPPPPPPPPPPWWWWWWWWWWWWWWWWMMMMMMHHHHHHHHIIIIIISSSSSSSSSSSSSSEEEEEEEEEEEEE",
	"YYYYYYYYYYYYYYYYYYYCDDDDDDDDZZZZZZRRRRRRRRROOOOOOOOOOOEEEEFPPPPPPPPPPPPPPPPPWWWWWWWWWWWWWWMMMMMMMMMHHHHHHHIIIIIIISSSSSSSSSSSGSSSEEEEEEEEEEEE",
];

const calculateCostByPerimeter = (region) => {
	const area = region.plants.size;
	let perimeter = 0;

	for (let plant of region.plants) {
		let [x, y] = plant.split(":");
		x = Number.parseInt(x);
		y = Number.parseInt(y);

		if (!region.plants.has(`${x}:${y - 1}`)) {
			perimeter++;
		}
		if (!region.plants.has(`${x + 1}:${y}`)) {
			perimeter++;
		}
		if (!region.plants.has(`${x}:${y + 1}`)) {
			perimeter++;
		}
		if (!region.plants.has(`${x - 1}:${y}`)) {
			perimeter++;
		}
	}

	return area * perimeter;
};

const calculateCostBySides = (region) => {
	const area = region.plants.size;
	let perimeter = 0;
	let innerCorners = 0;
	let outerCorners = 0;

	for (let plant of region.plants) {
		let [x, y] = plant.split(":");
		x = Number.parseInt(x);
		y = Number.parseInt(y);

		if (
			!region.plants.has(`${x - 1}:${y}`) &&
			!region.plants.has(`${x}:${y - 1}`)
		) {
			outerCorners++;
		}
		if (
			!region.plants.has(`${x + 1}:${y}`) &&
			!region.plants.has(`${x}:${y - 1}`)
		) {
			outerCorners++;
		}
		if (
			!region.plants.has(`${x - 1}:${y}`) &&
			!region.plants.has(`${x}:${y + 1}`)
		) {
			outerCorners++;
		}
		if (
			!region.plants.has(`${x + 1}:${y}`) &&
			!region.plants.has(`${x}:${y + 1}`)
		) {
			outerCorners++;
		}

		if (
			region.plants.has(`${x - 1}:${y}`) &&
			region.plants.has(`${x}:${y - 1}`) &&
			!region.plants.has(`${x - 1}:${y - 1}`)
		) {
			innerCorners++;
		}
		if (
			region.plants.has(`${x + 1}:${y}`) &&
			region.plants.has(`${x}:${y - 1}`) &&
			!region.plants.has(`${x + 1}:${y - 1}`)
		) {
			innerCorners++;
		}
		if (
			region.plants.has(`${x - 1}:${y}`) &&
			region.plants.has(`${x}:${y + 1}`) &&
			!region.plants.has(`${x - 1}:${y + 1}`)
		) {
			innerCorners++;
		}
		if (
			region.plants.has(`${x + 1}:${y}`) &&
			region.plants.has(`${x}:${y + 1}`) &&
			!region.plants.has(`${x + 1}:${y + 1}`)
		) {
			innerCorners++;
		}
	}

	return area * (innerCorners + outerCorners);
};

const test = (input, calculateCost) => {
	const traversed = new Set();
	const regions = [];

	const xMax = input[0].length - 1;
	const yMax = input.length - 1;

	const explore = (region, x, y) => {
		let dx, dy, xy;
		traversed.add(`${x}:${y}`);

		if (y > 0) {
			dx = x;
			dy = y - 1;
			xy = `${dx}:${dy}`;
			if (input[dy].charAt(dx) === region.crop && !traversed.has(xy)) {
				region.plants.add(xy);
				region = explore(region, dx, dy);
			}
		}
		if (x < yMax) {
			dx = x + 1;
			dy = y;
			xy = `${dx}:${dy}`;
			if (input[dy].charAt(dx) === region.crop && !traversed.has(xy)) {
				region.plants.add(xy);
				region = explore(region, dx, dy);
			}
		}
		if (y < yMax) {
			dx = x;
			dy = y + 1;
			xy = `${dx}:${dy}`;
			if (input[dy].charAt(dx) === region.crop && !traversed.has(xy)) {
				region.plants.add(xy);
				region = explore(region, dx, dy);
			}
		}
		if (x > 0) {
			dx = x - 1;
			dy = y;
			xy = `${dx}:${dy}`;
			if (input[dy].charAt(dx) === region.crop && !traversed.has(xy)) {
				region.plants.add(xy);
				region = explore(region, dx, dy);
			}
		}

		return region;
	};

	for (let y = 0; y <= yMax; y++) {
		const row = input[y];
		for (let x = 0; x <= xMax; x++) {
			const c = row.charAt(x);
			const xy = `${x}:${y}`;
			if (!traversed.has(xy)) {
				let region = {
					crop: c,
					plants: new Set([xy]),
				};

				const explored = explore(region, x, y);

				regions.push(explored);
			}
		}
	}

	let total = 0;

	for (let region of regions) {
		total += calculateCost(region);
	}

	return total;
};

console.log("Answer - Part 1 - Input 1");
console.log(test(demoInput, calculateCostByPerimeter));
// 1930
console.log("Answer - Part 1 - Example 1");
console.log(test(exampleInput1, calculateCostByPerimeter));
// 140
console.log("Answer - Part 1 - Example 2");
console.log(test(exampleInput2, calculateCostByPerimeter));
// 772
console.log("Answer - Part 1 - Input 2");
console.log(test(testInput, calculateCostByPerimeter));
// 1402544

console.log("Answer - Part 2 - Input 1");
console.log(test(demoInput, calculateCostBySides));
// 1206
console.log("Answer - Part 2 - Example 1");
console.log(test(exampleInput1, calculateCostBySides));
// 80
console.log("Answer - Part 2 - Example 2");
console.log(test(exampleInput2, calculateCostBySides));
// 436
console.log("Answer - Part 2 - Example 3");
console.log(test(exampleInput3, calculateCostBySides));
// 236
console.log("Answer - Part 2 - Example 4");
console.log(test(exampleInput4, calculateCostBySides));
// 368
console.log("Answer - Part 2 - Input 2");
console.log(test(testInput, calculateCostBySides));
// 862486
