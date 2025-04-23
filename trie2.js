//RECURSIVE 
class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root; 
      for (let i = 0; i < word.length; i++) { 
        let char = word[i];
        if (!node.children[char]) { 
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true; 
    }
  
    search(word) {

      return this.dfs(this.root,word, 0)
    
    }
    dfs(node,word, index){
        if (index == word.length){
          return node.isEndOfWord
        }
        let char = word[index]
        if (!node.children[char]) {
          return false;
        }
        return this.dfs(node.children[char], word, index +1)
        
    }
  
    startsWith(prefix) {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
        let char = prefix[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  }

  function buildTrie(words){
    let myTrie = new Trie()
    for(let i = 0; i < words.length; i++){
      myTrie.insert(words[i])
    }
    return myTrie
  }

//Testing
let words = ['asa', 'amor', 'vida']
let trie = buildTrie(words)
console.log(trie.startsWith('a'))

console.log(trie.search('vida'))


  
  
  
  