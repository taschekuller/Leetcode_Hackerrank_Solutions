def diagonalDifference(arr):
    lrDiagonal = 0
    rlDiagonal = 0
    for i in range(len(arr)):
        lrDiagonal += arr[i][i]
        rlDiagonal += arr[i][(len(arr)-1)-i]
    return (abs(lrDiagonal-rlDiagonal))

