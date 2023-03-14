#include <limits.h>

int bad_code(float n) {

    int small[3];

    char index = 10;

    int x = small[index];

    double promoted = 3.14159 * n * n;

    return bad_code(x);
}


int main() {

    printf("%s %s", bad_code(1.0f));
}