class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [set() for _ in range(9)]
        columns = [set() for _ in range(9)]
        sub_boxes = [set() for _ in range(9)]

        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                if (board[r][c] in rows[r] or 
                    board[r][c] in columns[c] or 
                    board[r][c] in sub_boxes[(r // 3) * 3 + (c // 3)]):
                    return False
                rows[r].add(board[r][c])
                columns[c].add(board[r][c])
                sub_boxes[(r // 3) * 3 + (c // 3)].add(board[r][c])
                print(sub_boxes)
                
        return True