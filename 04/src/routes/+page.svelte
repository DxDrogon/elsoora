<script>
    var a = 0
    var b = 0
</script>
<h1>Eredményjelző</h1>
<table>
    <tr>
        <th>{a}</th>
        <th> - </th>
        <th>{b}</th>
    </tr>
    <tr>
        <td><button on:click={() => a++}>+</button></td>
        <td></td>
        <td><button on:click={() => b++}>+</button></td>
    </tr>
    <tr>
        <td>
            {#if a>0}
            <button on:click={() => a--}>-</button>
            {/if}
        </td>
        <td></td>
        <td>
            {#if b>0}
            <button on:click={() => b--}>-</button>
            {/if}
        </td>
    </tr>
</table>
<style>
    :global(body) {
        user-select: none;
    }
    h1 {
        text-align: center;
    }
    table {
        margin: 0 auto;
    }
    td {
        width: 100px;
        text-align: center;
    }
    th {
        font-size: 30px;
    }
</style>
